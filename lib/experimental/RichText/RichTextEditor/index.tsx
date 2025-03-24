import { Button } from "@/components/Actions/Button"
import { Cross } from "@/icons/app"
import { cn } from "@/lib/utils"
import CharacterCount from "@tiptap/extension-character-count"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
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
import { EditorBubbleMenu } from "./BubbleMenu"
import { AcceptChanges } from "./Enhance/AcceptChanges"
import { EnhanceError } from "./Enhance/EnhanceError"
import { FileList } from "./FileList"
import "./index.css"
import { ToolbarPlugin } from "./Toolbar"
import {
  handleEnhanceWithAIFunction,
  isValidSelectionForEnhancement,
} from "./utils/enhance"
import { handleAddFiles, handleRemoveFile } from "./utils/files"
import { heightMapping } from "./utils/helpers"
import { configureMention } from "./utils/mention"
import {
  actionConfig,
  enhanceConfig,
  filesConfig,
  MentionChangeResult,
  MentionedUser,
  mentionsConfig,
  RichTextEditorHeight,
  toolbarConfig,
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  toolbarConfig: toolbarConfig
  submitAction?: actionConfig
  cancelAction?: actionConfig
  onChange: (html: string | MentionChangeResult | null) => void
  title: string
  height?: RichTextEditorHeight
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  function RichTextEditor(
    {
      mentionsConfig,
      enhanceConfig,
      filesConfig,
      toolbarConfig,
      submitAction,
      cancelAction,
      title,
      height = "lg",
      maxCharacters,
      initialEditorState,
      onChange,
      placeholder,
    },
    ref
  ) {
    const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
    const [mentionSuggestions, setMentionSuggestions] = useState<
      MentionedUser[]
    >(mentionsConfig?.users || [])
    const editorRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isLoadingEnhance, setIsLoadingEnhance] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen)
    const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)
    const [aiError, setAiError] = useState<string | null>(null)

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
          StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
          Underline,
          TextStyle,
          Color,
          Image,
          Typography,
          Highlight,
          TaskList,
          TaskItem.configure({ nested: true }),
          TextAlign.configure({ types: ["heading", "paragraph"] }),
          Link.configure({
            openOnClick: false,
            HTMLAttributes: {
              rel: "noopener noreferrer",
              target: "_blank",
            },
          }),
          Placeholder.configure({ placeholder }),
          CharacterCount.configure({ limit: maxCharacters }),
          ...(mentionsConfig
            ? configureMention(
                mentionSuggestions,
                setMentionSuggestions,
                mentionsConfig.onMentionQueryStringChanged,
                mentionsConfig.users
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

    useImperativeHandle(ref, () => ({
      clear: () => editor?.commands.clearContent(),
      clearFiles: () => {
        setFiles([])
        if (filesConfig) {
          filesConfig.onFiles([])
        }
      },
      focus: () => editor?.commands.focus(),
    }))

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files
      if (selectedFiles && selectedFiles.length > 0) {
        let fileArray = Array.from(selectedFiles)
        if (filesConfig?.maxFileSize) {
          fileArray = fileArray.filter(
            (file) => file.size <= filesConfig.maxFileSize!
          )
        }
        handleAddFiles(fileArray, files, filesConfig, setFiles)
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
        if (enhanceConfig) {
          await handleEnhanceWithAIFunction({
            selectedText,
            editor: editor!,
            enhanceText: enhanceConfig?.onEnhanceText!,
            setIsLoadingEnhance,
            isValidSelectionForEnhancement,
            onSuccess: () => {
              editor?.setEditable(false)
              setIsAcceptChangesOpen(true)
            },
            onError: (error?: string) => {
              editor?.setEditable(true)
              setIsAcceptChangesOpen(false)
              setAiError(error || enhanceConfig?.enhanceLabels.defaultError)
            },
            enhanceType,
            customIntent,
            context,
          })
        }
      },
      [editor, setIsLoadingEnhance]
    )

    return (
      <div
        ref={containerRef}
        className="m-5 flex w-full flex-col rounded-xl border-[1px] border-solid border-f1-border bg-f1-background"
      >
        {isFullscreen && (
          <div className="flex w-full items-center justify-between border-0 border-b-[1px] border-solid border-f1-border px-5 py-3">
            <p className="text-2xl font-semibold text-f1-foreground">{title}</p>
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
          config={toolbarConfig}
          disableButtons={isAcceptChangesOpen}
          canUseFiles={filesConfig ? true : false}
          enhanceConfig={enhanceConfig}
          isLoadingEnhance={isLoadingEnhance}
        />
        <div
          ref={editorRef}
          className={cn(
            "relative w-full",
            isFullscreen && "h-full overflow-y-hidden"
          )}
          onClick={() => {
            editor?.commands.focus()
          }}
        >
          <div
            className={cn(
              "h-80 overflow-y-auto px-5 py-3",
              isFullscreen ? "h-full" : heightMapping[height] || "h-80"
            )}
          >
            <EditorContent editor={editor} />
          </div>
          {filesConfig && (
            <>
              <input
                id="upload-button"
                type="file"
                multiple={filesConfig.multipleFiles}
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
              {files.length > 0 && (
                <FileList
                  files={files}
                  onRemoveFile={(fileIndex) =>
                    handleRemoveFile(fileIndex, files, filesConfig, setFiles)
                  }
                />
              )}
            </>
          )}
          {isAcceptChangesOpen && (
            <AcceptChanges
              labels={enhanceConfig?.enhanceLabels}
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
          {aiError && (
            <EnhanceError aiError={aiError} onClose={() => setAiError(null)} />
          )}
        </div>

        {editor && (
          <EditorBubbleMenu
            editor={editor}
            onEnhanceWithAI={handleEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            enhanceConfig={enhanceConfig}
            disableButtons={isAcceptChangesOpen}
          />
        )}

        {(submitAction || cancelAction || maxCharacters) && (
          <div className="flex w-full items-center justify-between border-0 border-t-[1px] border-solid border-f1-border px-4 py-3">
            <div>
              {editor && maxCharacters && (
                <p className="text-sm font-medium text-f1-foreground-secondary">
                  {editor.storage.characterCount.characters()} / {maxCharacters}
                </p>
              )}
            </div>
            <div className="flex gap-2">
              {cancelAction && (
                <Button
                  onClick={cancelAction.onClick}
                  variant="outline"
                  size="md"
                  label={cancelAction.label}
                  disabled={isAcceptChangesOpen || cancelAction.disabled}
                />
              )}
              {submitAction && (
                <Button
                  onClick={submitAction.onClick}
                  variant="default"
                  size="md"
                  label={submitAction.label}
                  disabled={isAcceptChangesOpen || submitAction.disabled}
                />
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)

export * from "./utils/types"
export { RichTextEditor }
export type { RichTextEditorHandle, RichTextEditorProps }
