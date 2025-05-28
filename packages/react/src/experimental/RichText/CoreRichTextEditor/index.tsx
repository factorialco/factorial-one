import { cn } from "@/lib/utils"
import { EditorContent, useEditor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import {
  forwardRef,
  useEffect,
  useId,
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
  secondaryActionType,
  toolbarLabels,
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: secondaryActionType
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
  mode?: "blank" | "normal"
  readMode?: boolean
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

const CoreRichTextEditor = forwardRef<
  RichTextEditorHandle,
  RichTextEditorProps
>(function RichTextEditor(
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
    mode = "normal",
    readMode = false,
  },
  ref
) {
  const editorId = useId()

  const fileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const editorContentContainerRef = useRef<HTMLDivElement>(null)

  const [hasFullHeight, setHasFullHeight] = useState(false)
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(true)
  const [isLoadingEnhance, setIsLoadingEnhance] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)
  const [needsMinHeight, setNeedsMinHeight] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
  const [lastIntent, setLastIntent] = useState<lastIntentType>(null)
  const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
  const [mentionSuggestions, setMentionSuggestions] = useState<MentionedUser[]>(
    mentionsConfig?.users || []
  )
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

  useEffect(() => {
    if (isLoadingEnhance && editorContentContainerRef.current) {
      const containerHeight =
        editorContentContainerRef.current.getBoundingClientRect().height
      setNeedsMinHeight(containerHeight < 64)
    } else {
      setNeedsMinHeight(false)
    }
  }, [isLoadingEnhance])

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

  const disableAllButtons = !!(isAcceptChangesOpen || isLoadingEnhance || error)

  const editor = useEditor(
    {
      extensions: ExtensionsConfiguration({
        mentionsConfig,
        mentionSuggestions,
        setMentionSuggestions,
        placeholder,
        maxCharacters,
      }),
      editable: !readMode,
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

  const handleEnhanceWithAI = async (
    selectedIntent?: string,
    customIntent?: string
  ) => {
    if (enhanceConfig && editor) {
      await handleEnhanceWithAIFunction({
        editor: editor,
        enhanceText: enhanceConfig.onEnhanceText,
        setIsLoadingEnhance,
        onSuccess: () => {
          editor.setEditable(false)
          setIsAcceptChangesOpen(true)
        },
        onError: (error?: string) => {
          setIsAcceptChangesOpen(false)
          setError(error || enhanceConfig.enhanceLabels.defaultError)
        },
        selectedIntent,
        customIntent,
      })
    }
  }

  if (!editor) return null

  const editorContent = (
    <div
      ref={containerRef}
      id={editorId}
      className={cn(
        "rich-text-editor-container flex flex-col bg-f1-background",
        isFullscreen
          ? "fixed inset-0 z-50"
          : mode === "blank"
            ? "relative w-full"
            : "relative w-full rounded-xl border border-solid border-f1-border"
      )}
    >
      {mode === "normal" && (
        <Head
          isFullscreen={isFullscreen}
          handleToggleFullscreen={handleToggleFullscreen}
          disableAllButtons={disableAllButtons}
          title={title}
        />
      )}

      <div
        className="relative w-full flex-grow overflow-hidden"
        onClick={() => editor?.commands.focus()}
      >
        <div
          ref={editorContentContainerRef}
          className={cn(
            "scrollbar-macos relative flex w-full items-start justify-center",
            isFullscreen
              ? "h-full"
              : mode === "blank"
                ? "h-full"
                : getHeight(height),
            mode === "normal" && "overflow-y-auto pb-1 pl-3 pr-10 pt-3"
          )}
        >
          <motion.div
            className={cn(
              "w-full overflow-hidden",
              isFullscreen && "max-w-4xl"
            )}
            initial={false}
            animate={{
              minHeight: needsMinHeight ? "4rem" : "auto",
              opacity: needsMinHeight ? 0.8 : 1,
              scale: needsMinHeight ? 0.98 : 1,
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <EditorContent editor={editor} />
          </motion.div>
        </div>

        <AnimatePresence>
          {isLoadingEnhance && (
            <motion.div
              key="loading-enhance"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <LoadingEnhance
                isFullscreen={isFullscreen}
                label={enhanceConfig?.enhanceLabels.loadingEnhanceLabel}
                mode={mode}
              />
            </motion.div>
          )}
        </AnimatePresence>
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

        {mode === "normal" && (
          <FileList
            files={files}
            disabled={disableAllButtons}
            filesConfig={filesConfig}
            setFiles={setFiles}
            fileInputRef={fileInputRef}
          />
        )}

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
          mode={mode}
        />

        <EditorBubbleMenu
          editorId={editorId}
          editor={editor}
          disableButtons={disableAllButtons}
          toolbarLabels={toolbarLabels}
          isToolbarOpen={isToolbarOpen}
          isFullscreen={isFullscreen}
          onEnhanceWithAI={handleEnhanceWithAI}
          isLoadingEnhance={isLoadingEnhance}
          enhanceConfig={enhanceConfig}
          setLastIntent={setLastIntent}
        />
      </div>
    </div>
  )

  return isFullscreen
    ? ReactDOM.createPortal(editorContent, document.body)
    : editorContent
})

export * from "./utils/constants"
export * from "./utils/types"
export type { RichTextEditorHandle, RichTextEditorProps }

export { CoreRichTextEditor }
