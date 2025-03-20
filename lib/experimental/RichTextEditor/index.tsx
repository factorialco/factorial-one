import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

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
import screenfull from "screenfull"

import Box, { EnhancedDimension } from "design-system/layouts/Box"

import { EditorBubbleMenu } from "@/experimental/RichTextEditor/BubbleMenu"
import { FileList } from "@/experimental/RichTextEditor/FileList"
import { ToolbarPlugin } from "@/experimental/RichTextEditor/Toolbar"
import { ToolbarButton } from "@/experimental/RichTextEditor/Toolbar/ToolbarButton"
import "@/experimental/RichTextEditor/styles.css"
import { isValidSelectionForEnhancement } from "@/experimental/RichTextEditor/utils/enhance"
import { configureMention } from "@/experimental/RichTextEditor/utils/mention"
import { Button } from "@/factorial-one"

// Types related to mentions and enhancements

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
  height?: EnhancedDimension
  maxFileSize?: number

  // Mentions configuration
  hasMentions?: boolean
  hasDebouncedMentions?: boolean
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

  // File handling
  onFiles?: onFiles
  maxCharacters?: number

  // Actions
  onSubmit?: () => void
  onCancel?: () => void

  // Miscellaneous
  title?: string
  fullScreenEnabled?: boolean
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
      height = "s200",
      maxFileSize: _maxFileSize,
      hasMentions = false,
      hasDebouncedMentions = false,
      onMentionQueryStringChanged,
      users,
      enhanceText,
      enhancementOptions,
      onFiles,
      maxCharacters,
      onSubmit,
      onCancel,
      title,
      fullScreenEnabled = true,
    },
    ref
  ) {
    const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
    const [mentionSuggestions, setMentionSuggestions] = useState<
      MentionedUser[]
    >(users || [])
    const editorRef = useRef<HTMLDivElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isEnhancing, setIsEnhancing] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen)

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
          ...(hasMentions || hasDebouncedMentions
            ? configureMention(
                mentionSuggestions,
                setMentionSuggestions,
                onMentionQueryStringChanged,
                users || []
              )
            : []),
        ],
        content: initialEditorState?.content || "",
        editable: true,
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
        if (
          !editor ||
          !selectedText ||
          !isValidSelectionForEnhancement(selectedText) ||
          !enhanceText
        )
          return
        try {
          setIsEnhancing(true)
          const textToEnhance = selectedText
          const { from, to } = editor.state.selection
          const editorEnhanceType: string = enhanceType || "improve-writing"

          const enhancedText = await enhanceText({
            text: textToEnhance,
            type: editorEnhanceType,
            intent: customIntent || "improve text in editor",
            context: context,
          })

          if (from === 0 && to === editor.state.doc.content.size) {
            editor.chain().focus().setContent(enhancedText).run()
          } else {
            editor
              .chain()
              .focus()
              .deleteRange({ from, to })
              .insertContent(enhancedText)
              .run()
          }
        } catch (error) {
          // Error handling
        } finally {
          setIsEnhancing(false)
        }
      },
      [editor, enhanceText]
    )

    return (
      <Box
        ref={containerRef}
        border={{
          all: {
            color: "grey300",
            style: "solid",
            width: "s1",
          },
        }}
        borderRadius={{
          all: "abs012",
        }}
        background="white"
        width="full"
      >
        {isFullscreen && (
          <Box
            paddingX="s24"
            paddingY="s16"
            flexDirection="row"
            alignItems="center"
            justifyContent="spaceBetween"
            border={{
              bottom: { color: "grey300", style: "solid", width: "s1" },
            }}
          >
            <p className="text-2xl font-semibold text-f1-foreground">
              {title || "Fullscreen Rich Text Editor"}
            </p>
            <ToolbarButton
              icon="collapse"
              onClick={handleToggleFullscreen}
              title="Collapse"
            />
          </Box>
        )}

        <ToolbarPlugin
          editor={editor}
          handleToggleFullscreen={handleToggleFullscreen}
          isFullscreen={isFullscreen}
          onEnhanceWithAI={handleEnhanceWithAI}
          fileInputRef={fileInputRef}
          isEnhancing={isEnhancing}
          canUseFiles={onFiles ? true : false}
          canUseAi={enhanceText ? true : false}
          fullScreenEnabled={fullScreenEnabled}
          enhancementOptions={enhancementOptions || []}
        />
        <Box
          paddingY="s12"
          paddingX="s20"
          height={isFullscreen ? "full" : height}
          ref={editorRef}
          overflowY="auto"
        >
          <EditorContent editor={editor} />
          {onFiles && (
            <>
              <input
                id="upload-button"
                type="file"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              {files.length > 0 && (
                <FileList files={files} onRemoveFile={handleRemoveFile} />
              )}
            </>
          )}
        </Box>

        {editor && (
          <EditorBubbleMenu
            editor={editor}
            onEnhanceWithAI={handleEnhanceWithAI}
            isEnhancing={isEnhancing}
            canUseAi={enhanceText ? true : false}
            enhancementOptions={enhancementOptions || []}
          />
        )}

        {(onSubmit || onCancel || maxCharacters) && (
          <Box
            padding="s12"
            flexDirection="row"
            gap="s8"
            alignItems="center"
            border={{ top: { color: "grey300", style: "solid", width: "s1" } }}
          >
            {editor && maxCharacters && (
              <p className="f1-foreground-disabled text-sm font-medium">
                {editor.storage.characterCount.characters()} / {maxCharacters}
              </p>
            )}
            <Box flexDirection="rowReverse" gap="s8" flexGrow>
              {onSubmit && (
                <Button
                  onClick={onSubmit}
                  variant="default"
                  size="md"
                  label="Save"
                />
              )}
              {onCancel && (
                <Button
                  onClick={onCancel}
                  variant="outline"
                  size="md"
                  label="Cancel"
                />
              )}
            </Box>
          </Box>
        )}
      </Box>
    )
  }
)

export { RichTextEditor }

export type {
  EnhancementOption,
  MentionChangeResult,
  MentionedUser,
  onFiles,
  RichTextEditorHandle,
  RichTextEditorProps,
}
