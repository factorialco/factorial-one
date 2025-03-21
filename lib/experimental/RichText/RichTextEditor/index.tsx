import { Button } from "@/components/Actions/Button"
import { EditorBubbleMenu } from "@/experimental/RichText/RichTextEditor/BubbleMenu"
import { FileList } from "@/experimental/RichText/RichTextEditor/FileList"
import { ToolbarPlugin } from "@/experimental/RichText/RichTextEditor/Toolbar"
import {
  handleEnhanceWithAIFunction,
  isValidSelectionForEnhancement,
} from "@/experimental/RichText/RichTextEditor/utils/enhance"
import { configureMention } from "@/experimental/RichText/RichTextEditor/utils/mention"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import CharacterCount from "@tiptap/extension-character-count"
import Color from "@tiptap/extension-color"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import screenfull from "screenfull"
import { AcceptChanges } from "./Enhance/AcceptChanges"
import "./index.css"

// types related to the editor styles
type RichTextEditorHeight = "xs" | "sm" | "md" | "lg" | "xl" | "h-full"

const heightMapping: Record<RichTextEditorHeight, string> = {
  xs: "h-60",
  sm: "h-64",
  md: "h-72",
  lg: "h-80",
  xl: "h-96",
  "h-full": "h-full",
}

// Types related to mentions

type MentionedUser = {
  id: number
  label: string
  image_url?: string
  href?: string
}

type MentionChangeResult = {
  value: string
  ids: number[]
}

// Types related to enhancements

type EnhancementOption = {
  id: string
  label: string
  prompt: string
  subOptions?: EnhancementOption[]
}

type onFiles = (files: File[]) => void

type enhanceTextType = {
  text: string
  type: string
  intent?: string
  context?: string
}

type toolbarConfig = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  link?: boolean
  textSize?: {
    normal?: boolean
    heading1?: boolean
    heading2?: boolean
    heading3?: boolean
  }
  textAlign?: {
    left?: boolean
    center?: boolean
    right?: boolean
    justify?: boolean
  }
  list?: {
    bullet?: boolean
    ordered?: boolean
  }
  moreOptions?: {
    code?: boolean
    horizontalRule?: boolean
    quote?: boolean
  }
  fullScreen?: boolean
}
// Component props and handle

interface RichTextEditorProps {
  // Required props
  onChange: (html: string | null | MentionChangeResult) => void
  placeholder: string

  // Initial state and editor configuration
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  height?: RichTextEditorHeight
  maxFileSize?: number

  // Mentions configuration
  hasMentions?: boolean
  onMentionQueryStringChanged?: (
    queryString: string
  ) => Promise<MentionedUser[]> | undefined
  users?: MentionedUser[]

  // AI enhancement
  enhanceText?: ({
    text,
    type,
    intent,
    context,
  }: enhanceTextType) => Promise<string>
  enhancementOptions?: EnhancementOption[]
  canUseCustomPrompt?: boolean

  // File handling
  onFiles?: onFiles
  maxCharacters?: number

  // Actions
  onSubmit?: () => void
  onCancel?: () => void

  // Miscellaneous
  title?: string

  toolbarConfig?: toolbarConfig
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  function RichTextEditor(
    {
      onChange,
      placeholder,
      initialEditorState,
      height = "lg",
      maxFileSize: _maxFileSize,
      hasMentions = false,
      onMentionQueryStringChanged,
      users,
      enhanceText,
      enhancementOptions,
      canUseCustomPrompt = false,
      onFiles,
      maxCharacters,
      onSubmit,
      onCancel,
      title,
      toolbarConfig,
    },
    ref
  ) {
    const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
    const [mentionSuggestions, setMentionSuggestions] = useState<
      MentionedUser[]
    >(users || [])
    const editorRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isLoadingAi, setIsLoadingAi] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen)
    const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)

    useEffect(() => {
      if (screenfull.isEnabled) {
        const handleChange = () => setIsFullscreen(screenfull.isFullscreen)
        screenfull.on("change", handleChange)
        return () => {
          screenfull.off("change", handleChange)
        }
      }
    }, [])

    const handleToggleFullscreen = () => {
      if (containerRef.current && screenfull.isEnabled) {
        screenfull.toggle(containerRef.current)
      }
    }

    const editor = useEditor(
      {
        extensions: [
          StarterKit.configure({
            heading: {
              levels: [1, 2, 3],
            },
          }),
          Underline,
          TextStyle,
          Color,
          Image,
          Typography,
          TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
          Link.configure({
            openOnClick: false,
            HTMLAttributes: {
              rel: "noopener noreferrer",
              target: "_blank",
            },
          }),
          Placeholder.configure({
            placeholder,
          }),
          CharacterCount.configure({
            limit: maxCharacters || null,
          }),
          ...(hasMentions
            ? configureMention(
                mentionSuggestions,
                setMentionSuggestions,
                onMentionQueryStringChanged,
                users || []
              )
            : []),
        ],
        content: initialEditorState?.content || "",
        onUpdate: ({ editor: editorInstance }) => {
          if (onChange) {
            const html = editorInstance.getHTML()
            const mentions: MentionedUser[] = []
            const doc = editorInstance.state.doc
            doc.descendants((node) => {
              if (node.type.name === "mention") {
                mentions.push({
                  id: node.attrs.id,
                  label: node.attrs.label,
                  image_url: node.attrs.image_url,
                  href: node.attrs.href,
                })
              }
              return true
            })
            if (mentions.length > 0) {
              const ids = mentions.map((m) => Number(m.id))
              onChange({
                value: html,
                ids,
              })
            } else {
              onChange(html || null)
            }
          }
        },
      },
      []
    )

    const handleFiles = (newFiles: File[]) => {
      if (onFiles) {
        const updatedFiles = [...files, ...newFiles]
        setFiles(updatedFiles)
        onFiles(updatedFiles)
      }
    }

    const handleRemoveFile = (fileIndex: number) => {
      const updatedFiles = [...files]
      updatedFiles.splice(fileIndex, 1)
      setFiles(updatedFiles)
      if (onFiles) {
        onFiles(updatedFiles)
      }
    }

    useImperativeHandle(ref, () => ({
      clear: () => {
        editor?.commands.clearContent()
      },
      clearFiles: () => {
        setFiles([])
        if (onFiles) {
          onFiles([])
        }
      },
      focus: () => {
        editor?.commands.focus()
      },
    }))

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files
      if (selectedFiles && selectedFiles.length > 0) {
        const fileArray = Array.from(selectedFiles)
        handleFiles(fileArray)
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }

    const handleEnhanceWithAI = useCallback(
      async (
        selectedText: string,
        enhanceType?: string,
        customIntent?: string,
        context?: string
      ) => {
        await handleEnhanceWithAIFunction({
          selectedText,
          editor: editor!,
          enhanceText: enhanceText!,
          setIsLoadingAi,
          isValidSelectionForEnhancement,
          enhanceType,
          customIntent,
          context,
        })
        editor?.setEditable(false)
        setIsAcceptChangesOpen(true)
      },
      [editor, enhanceText, setIsLoadingAi]
    )

    return (
      <div
        ref={containerRef}
        className="relative m-5 flex w-full flex-col rounded-xl border-[1px] border-solid border-f1-border bg-f1-background"
      >
        {isFullscreen && (
          <div className="flex w-full items-center justify-between border-0 border-b-[1px] border-solid border-f1-border px-5 py-3">
            <p className="text-2xl font-semibold text-f1-foreground">
              {title || "Fullscreen Rich Text Editor"}
            </p>
            <Button
              icon={Cross}
              onClick={handleToggleFullscreen}
              label="Collapse"
              hideLabel
              variant="ghost"
              type="button"
            />
          </div>
        )}

        <ToolbarPlugin
          editor={editor}
          handleToggleFullscreen={handleToggleFullscreen}
          isFullscreen={isFullscreen}
          onEnhanceWithAI={handleEnhanceWithAI}
          fileInputRef={fileInputRef}
          isLoadingAi={isLoadingAi}
          canUseFiles={onFiles ? true : false}
          canUseAi={enhanceText ? true : false}
          enhancementOptions={enhancementOptions || []}
          canUseCustomPrompt={canUseCustomPrompt}
          config={toolbarConfig || {}}
          disableButtons={isAcceptChangesOpen}
        />
        <div
          ref={editorRef}
          className={cn(
            "w-full overflow-y-auto px-5 py-3",
            isFullscreen ? "h-full" : heightMapping[height] || "h-80"
          )}
          onClick={() => {
            editor?.commands.focus()
          }}
        >
          <EditorContent editor={editor} />
          {onFiles && (
            <>
              <input
                id="upload-button"
                type="file"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
              {files.length > 0 && (
                <FileList files={files} onRemoveFile={handleRemoveFile} />
              )}
            </>
          )}
        </div>

        {editor && (
          <EditorBubbleMenu
            editor={editor}
            onEnhanceWithAI={handleEnhanceWithAI}
            isLoadingAi={isLoadingAi}
            canUseAi={enhanceText ? true : false}
            enhancementOptions={enhancementOptions || []}
            canUseCustomPrompt={canUseCustomPrompt}
            disableButtons={isAcceptChangesOpen}
          />
        )}

        {(onSubmit || onCancel || maxCharacters) && (
          <div className="flex w-full items-center justify-between border-0 border-t-[1px] border-solid border-f1-border px-4 py-3">
            {editor && maxCharacters && (
              <p className="text-sm font-medium text-f1-foreground-secondary">
                {editor.storage.characterCount.characters()} / {maxCharacters}
              </p>
            )}
            <div className="flex gap-2">
              {onCancel && (
                <Button
                  onClick={onCancel}
                  variant="outline"
                  size="md"
                  label="Cancel"
                  disabled={isAcceptChangesOpen}
                />
              )}
              {onSubmit && (
                <Button
                  onClick={onSubmit}
                  variant="default"
                  size="md"
                  label="Save"
                  disabled={isAcceptChangesOpen}
                />
              )}
            </div>
          </div>
        )}
        {isAcceptChangesOpen && (
          <AcceptChanges
            onAccept={() => {
              setIsAcceptChangesOpen(false)
              editor?.setEditable(true)
            }}
            onReject={() => {
              editor?.chain().focus().undo().run()
              setIsAcceptChangesOpen(false)
              editor?.setEditable(true)
            }}
          />
        )}
      </div>
    )
  }
)

export { RichTextEditor }

export type {
  EnhancementOption,
  enhanceTextType,
  MentionChangeResult,
  MentionedUser,
  onFiles,
  RichTextEditorHandle,
  RichTextEditorHeight,
  RichTextEditorProps,
  toolbarConfig,
}
