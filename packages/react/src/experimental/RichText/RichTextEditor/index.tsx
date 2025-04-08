import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { EditorContent, useEditor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import ReactDOM from "react-dom"
import "../index.css"
import { EditorBubbleMenu } from "./BubbleMenu"
import { AcceptChanges } from "./Enhance/AcceptChanges"
import { LoadingEnhance } from "./Enhance/LoadingEnhance"
import { Error } from "./Error"
import { FileList } from "./FileList"
import { Footer } from "./Footer"
import { Head } from "./Head"
import { handleEnhanceWithAIFunction } from "./utils/enhance"
import { ExtensionsConfiguration } from "./utils/extensions"
import {
  getHeight,
  getHeightThreshold,
  handleEditorUpdate,
  setEditorContent,
  setupContainerObservers,
} from "./utils/helpers"
import {
  actionType,
  editorStateType,
  enhanceConfig,
  errorConfig,
  filesConfig,
  heightType,
  lastIntentType,
  MentionedUser,
  mentionsConfig,
  primaryActionType,
  resultType,
  toolbarLabels,
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: actionType
  primaryAction?: primaryActionType
  onChange: (result: resultType) => void
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  toolbarLabels: toolbarLabels
  title: string
  errorConfig?: errorConfig
  height?: heightType
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

const RichTextEditor = forwardRef<RichTextEditorHandle, RichTextEditorProps>(
  function RichTextEditor(
    {
      mentionsConfig,
      enhanceConfig,
      filesConfig,
      secondaryAction,
      primaryAction,
      maxCharacters,
      initialEditorState,
      onChange,
      placeholder,
      toolbarLabels,
      title,
      errorConfig,
      height = "auto",
    },
    ref
  ) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const editorContentContainerRef = useRef<HTMLDivElement>(null)

    const [hasFullHeight, setHasFullHeight] = useState(false)
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(true)
    const [isLoadingEnhance, setIsLoadingEnhance] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isToolbarOpen, setIsToolbarOpen] = useState(false)
    const [lastIntent, setLastIntent] = useState<lastIntentType>(null)
    const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
    const [mentionSuggestions, setMentionSuggestions] = useState<
      MentionedUser[]
    >(mentionsConfig?.users || [])
    const [editorState, setEditorState] = useState<editorStateType>({
      html: initialEditorState?.content || "",
      json: null,
    })

    useEffect(() => {
      if (isFullscreen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
      return () => {
        document.body.style.overflow = ""
      }
    }, [isFullscreen])

    useEffect(() => {
      const heightThreshold = isFullscreen
        ? window.innerHeight
        : getHeightThreshold(height)
      const cleanupObservers = setupContainerObservers({
        containerRef: editorContentContainerRef,
        onHeightChange: setHasFullHeight,
        onScrollChange: setIsScrolledToBottom,
        heightThreshold,
      })
      return cleanupObservers
    }, [height, isFullscreen])

    const handleToggleFullscreen = () => {
      if (editor) {
        // Save the current editor state in json format, cause it's easier to handle for tiptap all the states and we can keep all the states
        setEditorState({
          ...editorState,
          json: editor.getJSON(),
        })
      }
      setIsFullscreen((prev) => !prev)
    }
  }, [])

  useEffect(() => {
    const cleanupObservers = setupContainerObservers(
      editorContentContainerRef,
      setHasFullHeight,
      setIsScrolledToBottom
    )

    const editor = useEditor(
      {
        extensions: ExtensionsConfiguration({
          mentionsConfig,
          mentionSuggestions,
          setMentionSuggestions,
          placeholder,
          maxCharacters,
        }),
        content: editorState.json || editorState.html,
        onUpdate: ({ editor }) => {
          handleEditorUpdate({ editor, onChange, setEditorState })
        },
      },
      [isFullscreen]
    )

    useEffect(() => {
      if (error && editor) {
        editor.setEditable(false)
      }
    }, [error, editor])

    useEffect(() => {
      if (editor && editorState.json) {
        setEditorState({
          ...editorState,
          json: null,
        })
      }
    }, [editor, editorState])

    useImperativeHandle(ref, () => ({
      clear: () => editor?.commands.clearContent(),
      clearFiles: () => {
        setFiles([])
        if (filesConfig) {
          filesConfig.onFiles([])
        }
      },
      focus: () => editor?.commands.focus(),
      setError: (errorMessage: string | null) => {
        setError(errorMessage)
        if (errorMessage) {
          editor?.setEditable(false)
        } else {
          editor?.setEditable(true)
        }
      },
      setContent: (content: string) => {
        if (editor) {
          setEditorContent({ editor, content })
          setEditorState({
            html: content,
            json: null,
          })
        }
      },
    }))

  if (!editor) return null

  return (
    <div
      ref={containerRef}
      id="rich-text-editor-container"
      className={cn(
        "relative flex w-full flex-col bg-f1-background",
        !isFullscreen && "rounded-xl border border-solid border-f1-border"
      )}
    >
      <div className="absolute right-3 top-3 z-50">
        <Button
          onClick={(e) => {
            e.preventDefault()
            handleToggleFullscreen()
          }}
          label="Fullscreen"
          aria-label="Toggle fullscreen mode"
          variant="outline"
          type="button"
          hideLabel
          round
          size="sm"
          icon={isFullscreen ? Minimize : Maximize}
          disabled={disableAllButtons}
        />
      </div>
      {isFullscreen && (
        <div className="pl-3 pr-10 pt-3">
          <h1 className="font-bold truncate text-ellipsis text-lg">{title}</h1>
        </div>
      )}

    const editorContent = (
      <div
        className={cn(
          isFullscreen
            ? "fixed inset-0 z-50 flex flex-col bg-f1-background"
            : "relative flex w-full flex-col rounded-xl border border-solid border-f1-border bg-f1-background"
        )}
      >
        <Head
          isFullscreen={isFullscreen}
          handleToggleFullscreen={handleToggleFullscreen}
          disableAllButtons={disableAllButtons}
          title={title}
        />

        <div
          className={cn("relative w-full flex-grow overflow-hidden")}
          onClick={() => editor?.commands.focus()}
        >
          <div
            ref={editorContentContainerRef}
            className={cn(
              "scrollbar-macos relative flex w-full items-start justify-center overflow-y-auto pl-3 pr-10 pt-3",
              isFullscreen ? "h-full" : getHeight(height)
            )}
          >
            <div className={cn("w-full", isFullscreen && "max-w-4xl")}>
              <EditorContent editor={editor} />
            </div>
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
              aria-label="Upload file"
            />
          )}
        </div>

        <div
          className={cn(
            "rounded-b-lg bg-f1-background px-3",
            hasFullHeight && !isScrolledToBottom && "shadow-editor-tools"
          )}
        >
          <AnimatePresence>
            {(isAcceptChangesOpen || error) && (
              <motion.div
                key="accordion"
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex w-full items-center justify-center pt-2"
                aria-label="Accept changes dialog"
              >
                {isAcceptChangesOpen && (
                  <AcceptChanges
                    labels={enhanceConfig?.enhanceLabels}
                    setLastIntent={setLastIntent}
                    setIsAcceptChangesOpen={setIsAcceptChangesOpen}
                    editor={editor}
                    handleEnhanceWithAI={handleEnhanceWithAI}
                    lastIntent={lastIntent}
                  />
                )}
                {error && (
                  <Error
                    error={error}
                    setError={setError}
                    editor={editor}
                    errorConfig={errorConfig}
                    closeErrorButtonLabel={errorConfig?.closeErrorButtonLabel}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <FileList
            files={files}
            disabled={disableAllButtons}
            filesConfig={filesConfig}
            setFiles={setFiles}
            fileInputRef={fileInputRef}
          />

          <Footer
            editor={editor}
            maxCharacters={maxCharacters}
            secondaryAction={secondaryAction}
            primaryAction={primaryAction}
            fileInputRef={fileInputRef}
            canUseFiles={filesConfig ? true : false}
            isLoadingEnhance={isLoadingEnhance}
            disableButtons={disableAllButtons}
            enhanceConfig={enhanceConfig}
            isFullscreen={isFullscreen}
            onEnhanceWithAI={handleEnhanceWithAI}
            setLastIntent={setLastIntent}
            toolbarLabels={toolbarLabels}
            setIsToolbarOpen={setIsToolbarOpen}
            isToolbarOpen={isToolbarOpen}
          />

          <EditorBubbleMenu
            editor={editor}
            disableButtons={disableAllButtons}
            toolbarLabels={toolbarLabels}
            isToolbarOpen={isToolbarOpen}
            isFullscreen={isFullscreen}
          />
        </div>
      </div>
    )

    return isFullscreen
      ? ReactDOM.createPortal(editorContent, document.body)
      : editorContent
  }
)

export * from "./utils/constants"
export * from "./utils/types"
export type { RichTextEditorHandle, RichTextEditorProps }

export const RichTextEditor = withSkeleton(
  RichTextEditorComponent,
  RichTextEditorSkeleton
)
