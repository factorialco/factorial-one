import { Button } from "@/components/Actions/exports"
import { Paperclip, TextSize } from "@/icons/app"
import { Editor } from "@tiptap/react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { EnhanceActivator } from "../Enhance"
import { SummaryActivator } from "../SummaryBlock/SummaryActivator"
import { Toolbar, ToolbarDivider } from "../Toolbar"
import {
  actionType,
  enhanceConfig,
  primaryActionType,
  toolbarLabels,
} from "../utils/types"
import { ActionsMenu } from "./ActionsMenu"

interface FooterProps {
  editor: Editor
  maxCharacters: number | undefined
  secondaryAction: actionType | undefined
  primaryAction: primaryActionType | undefined
  fileInputRef: React.RefObject<HTMLInputElement>
  canUseFiles: boolean
  onEnhanceWithAI: (
    selectedIntent?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  disableButtons: boolean
  enhanceConfig: enhanceConfig | undefined
  isFullscreen: boolean
  setLastIntent: (
    lastIntent: {
      selectedIntent?: string
      customIntent?: string
    } | null
  ) => void
  toolbarLabels: toolbarLabels
  setIsToolbarOpen: (isToolbarOpen: boolean) => void
  isToolbarOpen: boolean
  onGenerateSummary: () => Promise<void>
  isLoadingSummary: boolean
}

const Footer = ({
  editor,
  maxCharacters,
  secondaryAction,
  primaryAction,
  fileInputRef,
  canUseFiles,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  isFullscreen,
  setLastIntent,
  toolbarLabels,
  disableButtons,
  setIsToolbarOpen,
  isToolbarOpen,
  onGenerateSummary,
  isLoadingSummary,
}: FooterProps) => {
  const [toolbarAnimationComplete, setToolbarAnimationComplete] =
    useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const useLittleMode = containerWidth < 500

  return (
    <div ref={containerRef} className="flex max-w-full items-center gap-2 py-3">
      <div className="relative flex flex-grow items-center gap-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isToolbarOpen ? "100%" : 0 }}
          transition={{
            duration: 0.3,
            delay: isToolbarOpen ? 0.15 : 0,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => setToolbarAnimationComplete(isToolbarOpen)}
          className="absolute left-0 top-0 z-10 h-full bg-f1-background"
          aria-label="Rich text editor toolbar"
        >
          <Toolbar
            labels={toolbarLabels}
            editor={editor}
            isFullscreen={isFullscreen}
            disableButtons={disableButtons}
            onClose={() => {
              setIsToolbarOpen(false)
              setToolbarAnimationComplete(false)
            }}
            animationComplete={toolbarAnimationComplete}
          />
        </motion.div>

        <motion.div
          className="flex items-center gap-2 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isToolbarOpen ? 0 : 1,
          }}
          transition={{
            duration: isToolbarOpen ? 0.15 : 0.25,
            delay: isToolbarOpen ? 0 : 0.2,
            ease: "easeInOut",
          }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault()
              setIsToolbarOpen(true)
            }}
            variant="outline"
            size="md"
            label="Toolbar"
            disabled={disableButtons}
            type="button"
            hideLabel
            round
            icon={TextSize}
          />
          {canUseFiles && (
            <Button
              icon={Paperclip}
              onClick={(e) => {
                e.preventDefault()
                if (fileInputRef?.current) {
                  fileInputRef.current.click()
                } else {
                  const fileInput = document.getElementById(
                    "rich-text-editor-upload-button"
                  )
                  fileInput?.click()
                }
              }}
              hideLabel
              round
              label="Add Attachment"
              variant="outline"
              type="button"
              disabled={disableButtons}
            />
          )}
          {enhanceConfig && (
            <>
              <ToolbarDivider />
              <EnhanceActivator
                editor={editor}
                onEnhanceWithAI={onEnhanceWithAI}
                isLoadingEnhance={isLoadingEnhance}
                enhanceConfig={enhanceConfig}
                disableButtons={disableButtons}
                hideLabel={useLittleMode}
                setLastIntent={setLastIntent}
                position="top"
              />
            </>
          )}
          <ToolbarDivider />
          <SummaryActivator
            editor={editor}
            onGenerateSummary={onGenerateSummary}
            isLoading={isLoadingSummary}
            disableButtons={disableButtons}
            hideLabel={useLittleMode}
          />
          <Button
            label="Load JSON"
            onClick={() => {
              //load hardcoded json into the editor
              const json = {
                type: "doc",
                content: [
                  {
                    type: "paragraph",
                    attrs: {
                      textAlign: null,
                    },
                    content: [
                      {
                        type: "text",
                        text: "There was a time when I wandered in the dark — lost in the chaos of tangled syntax, broken builds, and tabs that betrayed me. My code was clumsy, my patience thin. But then, like a lighthouse in a storm, ",
                      },
                      {
                        type: "text",
                        marks: [
                          {
                            type: "bold",
                          },
                        ],
                        text: "you appeared",
                      },
                      {
                        type: "text",
                        text: ". Sleek, fast, and strangely comforting, my text editor. You didn't just open files — you opened ",
                      },
                      {
                        type: "text",
                        marks: [
                          {
                            type: "italic",
                          },
                        ],
                        text: "possibilities",
                      },
                    ],
                  },
                  {
                    type: "summaryBlock",
                    attrs: {
                      summary: "This is a summary",
                      highlights: ["highlight1", "highlight2"],
                      nextSteps: ["step1", "step2"],
                    },
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          textAlign: null,
                        },
                      },
                    ],
                  },
                ],
              }
              editor.chain().focus().insertContent(json).run()
            }}
          />
          {maxCharacters && !useLittleMode && (
            <p className="text-sm font-normal text-f1-foreground-secondary">
              {editor.storage.characterCount.characters()}/{maxCharacters}
            </p>
          )}
        </motion.div>
      </div>

      <ActionsMenu
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        useLittleMode={useLittleMode}
        disableButtons={disableButtons}
        isFullscreen={isFullscreen}
      />
    </div>
  )
}

export { Footer }
