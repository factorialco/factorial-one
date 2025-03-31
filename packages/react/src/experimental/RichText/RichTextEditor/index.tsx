import { Button } from "@/components/Actions/Button"
import { Maximize, Minimize } from "@/icons/app"
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
import { AnimatePresence, motion } from "framer-motion"
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
import { LoadingEnhance } from "./Enhance/LoadingEnhance"
import { FileList } from "./FileList"
import { Footer } from "./Footer"
import "./index.css"
import { Loading } from "./Loading"
import { handleEnhanceWithAIFunction } from "./utils/enhance"
import {
  getAcceptFileTypeString,
  handleAddFiles,
  handleRemoveFile,
} from "./utils/files"
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
} from "./utils/types"

interface RichTextEditorProps {
  mentionsConfig?: mentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: actionType
  primaryAction?: primaryActionType
  onChange: (html: string | MentionChangeResult | null) => void
  title: string
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  linkPopupConfig?: linkPopupConfig
  showTitle?: boolean
  isLoading?: boolean
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
      title,
      maxCharacters,
      initialEditorState,
      onChange,
      placeholder,
      linkPopupConfig,
      showTitle = false,
      isLoading = false,
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
    const [enhanceError, setEnhanceError] = useState<string | null>(null)
    const [lastIntent, setLastIntent] = useState<{
      selectedIntent?: string
      customIntent?: string
    } | null>(null)

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
      async (selectedIntent?: string, customIntent?: string) => {
        if (enhanceConfig) {
          await handleEnhanceWithAIFunction({
            editor: editor!,
            enhanceText: enhanceConfig?.onEnhanceText!,
            setIsLoadingEnhance,
            onSuccess: () => {
              editor?.setEditable(false)
              setIsAcceptChangesOpen(true)
            },
            onError: (error?: string) => {
              editor?.setEditable(true)
              setIsAcceptChangesOpen(false)
              setEnhanceError(
                error || enhanceConfig?.enhanceLabels.defaultError
              )
            },
            selectedIntent,
            customIntent,
          })
        }
      },
      [editor, setIsLoadingEnhance, setLastIntent]
    )

    if (!editor) return null

    return (
      <div
        ref={containerRef}
        className="relative flex h-auto flex-row bg-f1-background"
      >
        <div
          className={cn(
            "relative flex w-full flex-col overflow-hidden rounded-xl border-[1px] border-solid border-f1-border bg-f1-background",
            (isLoadingEnhance || isLoading) && "opacity-50 transition-opacity"
          )}
        >
          {isFullscreen || showTitle ? (
            <div className="flex w-full flex-shrink-0 items-center justify-between border-0 border-b-[1px] border-solid border-f1-border px-5 py-3.5">
              <p className="text-2xl font-semibold text-f1-foreground">
                {title}
              </p>

              <Button
                onClick={(e) => {
                  e.preventDefault()
                  handleToggleFullscreen()
                }}
                label="Fullscreen"
                variant="outline"
                type="button"
                hideLabel
                round
                size="sm"
                icon={isFullscreen ? Minimize : Maximize}
                disabled={isAcceptChangesOpen}
              />
            </div>
          ) : (
            <Button // @ts-ignore
              className="fixed right-7 top-7 z-50"
              onClick={(e) => {
                e.preventDefault()
                handleToggleFullscreen()
              }}
              label="Fullscreen"
              variant="outline"
              type="button"
              hideLabel
              round
              size="sm"
              icon={Maximize}
              disabled={isAcceptChangesOpen}
            />
          )}

          <div
            ref={editorRef}
            className={cn(
              "relative w-full flex-grow",
              isFullscreen && "h-full overflow-y-hidden"
            )}
            onClick={() => editor?.commands.focus()}
          >
            <div
              className={cn(
                "relative overflow-y-auto p-5 [scrollbar-width:thin]",
                isFullscreen ? "h-full" : "h-auto max-h-60 pr-16"
              )}
            >
              <EditorContent editor={editor} />
            </div>
          </div>

          <AnimatePresence>
            {(isAcceptChangesOpen || enhanceError) && (
              <motion.div
                key="accordion"
                initial={{ height: 0, opacity: 0, y: -20 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex w-full items-center justify-center"
              >
                {isAcceptChangesOpen && (
                  <AcceptChanges
                    labels={enhanceConfig?.enhanceLabels}
                    onAccept={() => {
                      setIsAcceptChangesOpen(false)
                      editor?.setEditable(true)
                      setLastIntent(null)
                    }}
                    onReject={() => {
                      editor?.chain().focus().undo().run()
                      setIsAcceptChangesOpen(false)
                      editor?.setEditable(true)
                      setLastIntent(null)
                    }}
                    onRepeat={() => {
                      editor?.chain().focus().undo().run()
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
                    onClose={() => setEnhanceError(null)}
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
              />
              <AnimatePresence>
                {files.length > 0 && (
                  <motion.div
                    key="filelist-accordion"
                    initial={{ height: 0, opacity: 0, y: -20 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className=""
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
                      disabled={isAcceptChangesOpen}
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
            isAcceptChangesOpen={isAcceptChangesOpen}
            fileInputRef={fileInputRef}
            canUseFiles={filesConfig ? true : false}
            isLoadingEnhance={isLoadingEnhance}
            disableButtons={isAcceptChangesOpen}
            enhanceConfig={enhanceConfig}
            isFullscreen={isFullscreen}
            onEnhanceWithAI={handleEnhanceWithAI}
            setLastIntent={setLastIntent}
          />

          <EditorBubbleMenu
            editor={editor}
            onEnhanceWithAI={handleEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            enhanceConfig={enhanceConfig}
            disableButtons={isAcceptChangesOpen}
            linkPopupConfig={linkPopupConfig}
            setLastIntent={setLastIntent}
          />
        </div>
        {isLoadingEnhance && (
          <LoadingEnhance
            label={enhanceConfig?.enhanceLabels.loadingEnhanceLabel}
          />
        )}
        {isLoading && <Loading />}
      </div>
    )
  }
)

export * from "./utils/types"
export { RichTextEditor }
export type { RichTextEditorHandle, RichTextEditorProps }
