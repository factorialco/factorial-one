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
import { Footer } from "./Footer"
import "./index.css"
import { Toolbar } from "./Toolbar"
import {
  handleEnhanceWithAIFunction,
  isValidSelectionForEnhancement,
} from "./utils/enhance"
import {
  getAcceptFileTypeString,
  handleAddFiles,
  handleRemoveFile,
} from "./utils/files"
import { heightMapping } from "./utils/helpers"
import { configureMention } from "./utils/mention"
import {
  actionType,
  enhanceConfig,
  filesConfig,
  linkPopupConfig,
  MentionChangeResult,
  MentionedUser,
  mentionsConfig,
  primaryActionType,
  RichTextEditorHeight,
  toolbarConfig,
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  toolbarConfig: toolbarConfig
  secondaryActions?: actionType[]
  primaryAction?: primaryActionType
  onChange: (html: string | MentionChangeResult | null) => void
  title: string
  height?: RichTextEditorHeight
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  toolbarIsOpen?: boolean
  linkPopupConfig?: linkPopupConfig
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
      secondaryActions,
      primaryAction,
      title,
      height = "lg",
      maxCharacters,
      initialEditorState,
      onChange,
      placeholder,
      linkPopupConfig,
      toolbarIsOpen = true,
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
    const [isToolbarOpen, setIsToolbarOpen] = useState(toolbarIsOpen)

    useEffect(() => {
      if (screenfull.isEnabled) {
        const handleChange = () => setIsFullscreen(screenfull.isFullscreen)
        screenfull.on("change", handleChange)
        return () => screenfull.off("change", handleChange)
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
        selectedIntent?: string,
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
            selectedIntent,
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
        className="flex w-full flex-col divide-x-0 divide-y-[1px] divide-solid divide-f1-border rounded-xl border-[1px] border-solid border-f1-border bg-f1-background"
      >
        {isFullscreen && (
          <div className="flex w-full flex-shrink-0 items-center justify-between px-5 py-3">
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

        {/**********
        Toolbar
        *********/}
        {(toolbarConfig !== "none" ||
          (toolbarConfig === "none" && enhanceConfig)) &&
          isToolbarOpen && (
            <div className="order-1 h-auto flex-shrink-0 overflow-hidden py-2 transition-all duration-300 md:py-3">
              <Toolbar
                editor={editor}
                handleToggleFullscreen={handleToggleFullscreen}
                isFullscreen={isFullscreen}
                onEnhanceWithAI={handleEnhanceWithAI}
                config={toolbarConfig}
                disableButtons={isAcceptChangesOpen}
                enhanceConfig={enhanceConfig}
                isLoadingEnhance={isLoadingEnhance}
              />
            </div>
          )}

        {/**********
        Editor
        *********/}
        <div
          ref={editorRef}
          className={cn(
            "relative order-2 w-full flex-grow",
            isFullscreen && "h-full overflow-y-hidden"
          )}
          onClick={() => {
            editor?.commands.focus()
          }}
        >
          <div
            className={cn(
              "overflow-y-auto p-5",
              isFullscreen ? "h-full" : heightMapping[height] || "h-80"
            )}
          >
            <EditorContent editor={editor} />
          </div>
          {filesConfig && (
            <>
              <input
                id="rich-text-editor-upload-button"
                type="file"
                multiple={filesConfig.multipleFiles}
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
                accept={getAcceptFileTypeString(filesConfig)}
              />
              {files.length > 0 && (
                <FileList
                  files={files}
                  onRemoveFile={(fileIndex) =>
                    handleRemoveFile(fileIndex, files, filesConfig, setFiles)
                  }
                  disabled={isAcceptChangesOpen}
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

        {/**********
        Footer
        *********/}
        <div className="order-3 flex-shrink-0 px-4 py-2 md:py-3">
          <Footer
            editor={editor}
            maxCharacters={maxCharacters}
            secondaryActions={secondaryActions}
            primaryAction={primaryAction}
            isAcceptChangesOpen={isAcceptChangesOpen}
            fileInputRef={fileInputRef}
            canUseFiles={filesConfig ? true : false}
            isToolbarOpen={isToolbarOpen}
            setIsToolbarOpen={setIsToolbarOpen}
            canToggleToolbar={toolbarConfig !== "none"}
          />
        </div>

        {/**********
        Bubble menu
        *********/}
        <EditorBubbleMenu
          editor={editor}
          onEnhanceWithAI={handleEnhanceWithAI}
          isLoadingEnhance={isLoadingEnhance}
          enhanceConfig={enhanceConfig}
          disableButtons={isAcceptChangesOpen}
          linkPopupConfig={linkPopupConfig}
        />
      </div>
    )
  }
)

export * from "./utils/types"
export { RichTextEditor }
export type { RichTextEditorHandle, RichTextEditorProps }
