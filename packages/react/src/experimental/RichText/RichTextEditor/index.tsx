import { Button } from "@/components/Actions/Button"
import { Maximize, Minimize } from "@/icons/app"
import { cn } from "@/lib/utils"
import { EditorContent, useEditor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import screenfull from "screenfull"
import "../index.css"
import { EditorBubbleMenu } from "./BubbleMenu"
import { AcceptChanges } from "./Enhance/AcceptChanges"
import { EnhanceError } from "./Enhance/EnhanceError"
import { LoadingEnhance } from "./Enhance/LoadingEnhance"
import { FileList } from "./FileList"
import { Footer } from "./Footer"
import { handleEnhanceWithAIFunction } from "./utils/enhance"
import { ExtensionsConfiguration } from "./utils/extensions"
import {
  getAcceptFileTypeString,
  handleAddFiles,
  handleRemoveFile,
} from "./utils/files"
import { setupContainerObservers } from "./utils/helpers"
import {
  actionType,
  enhanceConfig,
  filesConfig,
  MentionChangeResult,
  MentionedUser,
  mentionsConfig,
  primaryActionType,
  toolbarLabels,
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: actionType
  primaryAction?: primaryActionType
  onChange: (html: string | MentionChangeResult | null) => void
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  toolbarLabels: toolbarLabels
  title: string
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
      secondaryAction,
      primaryAction,
      maxCharacters,
      initialEditorState,
      onChange,
      placeholder,
      toolbarLabels,
      title,
    },
    ref
  ) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const editorContentContainerRef = useRef<HTMLDivElement>(null)

    const [hasFullHeight, setHasFullHeight] = useState(false)
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(true)
    const [isLoadingEnhance, setIsLoadingEnhance] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(screenfull.isFullscreen)
    const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false)
    const [enhanceError, setEnhanceError] = useState<string | null>(null)
    const [isToolbarOpen, setIsToolbarOpen] = useState(false)
    const [lastIntent, setLastIntent] = useState<{
      selectedIntent?: string
      customIntent?: string
    } | null>(null)
    const [files, setFiles] = useState<File[]>(initialEditorState?.files || [])
    const [mentionSuggestions, setMentionSuggestions] = useState<
      MentionedUser[]
    >(mentionsConfig?.users || [])

    useEffect(() => {
      if (screenfull.isEnabled) {
        const handleChange = () => setIsFullscreen(screenfull.isFullscreen)
        screenfull.on("change", handleChange)
        return () => screenfull.off("change", handleChange)
      }
    }, [])

    useEffect(() => {
      const cleanupObservers = setupContainerObservers(
        editorContentContainerRef,
        setHasFullHeight,
        setIsScrolledToBottom
      )

      return cleanupObservers
    }, [])

    const handleToggleFullscreen = () => {
      if (containerRef.current && screenfull.isEnabled) {
        screenfull.toggle(containerRef.current)
      }
    }

    const disableAllButtons = !!(
      isAcceptChangesOpen ||
      isLoadingEnhance ||
      enhanceError
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
            editor.setEditable(false)
            setIsAcceptChangesOpen(false)
            setEnhanceError(error || enhanceConfig.enhanceLabels.defaultError)
          },
          selectedIntent,
          customIntent,
        })
      }
    }

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
            <h1 className="font-bold truncate text-ellipsis text-lg">
              {title}
            </h1>
          </div>
        )}

        <div
          className={cn(
            "relative w-full flex-grow overflow-hidden",
            isFullscreen && "h-full"
          )}
          onClick={() => editor?.commands.focus()}
        >
          <div
            ref={editorContentContainerRef}
            className={cn(
              "scrollbar-macos relative flex w-full items-start justify-center overflow-y-auto pl-3 pr-4 pt-3",
              isFullscreen ? "h-full" : "h-auto max-h-60 pr-10"
            )}
          >
            <div className={cn("w-full", isFullscreen && "max-w-4xl")}>
              <EditorContent editor={editor} />
            </div>
          </div>

          {isLoadingEnhance && (
            <LoadingEnhance
              isFullscreen={isFullscreen}
              label={enhanceConfig?.enhanceLabels.loadingEnhanceLabel}
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
            {(isAcceptChangesOpen || enhanceError) && (
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
                    onAccept={() => {
                      setIsAcceptChangesOpen(false)
                      editor.setEditable(true)
                      setLastIntent(null)
                    }}
                    onReject={() => {
                      editor.chain().focus().undo().run()
                      setIsAcceptChangesOpen(false)
                      editor.setEditable(true)
                      setLastIntent(null)
                    }}
                    onRepeat={() => {
                      editor.chain().focus().undo().run()
                      handleEnhanceWithAI(
                        lastIntent?.selectedIntent,
                        lastIntent?.customIntent
                      )
                    }}
                  />
                )}

                {enhanceError && (
                  <EnhanceError
                    error={enhanceError}
                    onClose={() => {
                      setEnhanceError(null)
                      editor.setEditable(true)
                    }}
                    closeErrorButtonLabel={
                      enhanceConfig?.enhanceLabels.closeErrorButtonLabel
                    }
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>

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
              <AnimatePresence>
                {files.length > 0 && (
                  <motion.div
                    key="filelist-accordion"
                    initial={{ height: 0, opacity: 0, y: -20 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FileList
                      files={files}
                      onRemoveFile={(fileIndex) =>
                        handleRemoveFile(
                          fileIndex,
                          files,
                          filesConfig,
                          setFiles
                        )
                      }
                      disabled={disableAllButtons}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
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
          />

          <EditorBubbleMenu
            editor={editor}
            disableButtons={disableAllButtons}
            toolbarLabels={toolbarLabels}
            isToolbarOpen={isToolbarOpen}
          />
        </div>
      </div>
    )
  }
)

export * from "./utils/constants"
export * from "./utils/types"
export { RichTextEditor }
export type { RichTextEditorHandle, RichTextEditorProps }
