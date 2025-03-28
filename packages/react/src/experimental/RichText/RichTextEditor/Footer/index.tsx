import { Button } from "@/components/Actions/exports"
import { Masonry, Paperclip } from "@/icons/app"
import { Editor } from "@tiptap/react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { EnhanceActivator } from "../Enhance"
import { Toolbar, ToolbarDivider } from "../Toolbar"
import { actionType, enhanceConfig, primaryActionType } from "../utils/types"

interface FooterProps {
  editor: Editor
  maxCharacters: number | undefined
  secondaryAction: actionType | undefined
  primaryAction: primaryActionType | undefined
  isAcceptChangesOpen: boolean
  fileInputRef: React.RefObject<HTMLInputElement>
  canUseFiles: boolean
  onEnhanceWithAI?: (
    selectedText: string,
    selectedIntent?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  disableButtons: boolean
  enhanceConfig: enhanceConfig | undefined
  isFullscreen: boolean
}

const Footer = ({
  editor,
  maxCharacters,
  secondaryAction,
  primaryAction,
  isAcceptChangesOpen,
  fileInputRef,
  canUseFiles,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  isFullscreen,
}: FooterProps) => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
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
    <div
      ref={containerRef}
      className="flex max-w-full items-center gap-2 px-4 py-2 md:py-3"
    >
      <div className="relative flex flex-grow items-center gap-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isToolbarOpen ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => setToolbarAnimationComplete(isToolbarOpen)}
          className="absolute left-0 top-0 z-10 h-full bg-f1-background"
        >
          <Toolbar
            editor={editor}
            isFullscreen={isFullscreen}
            disableButtons={isAcceptChangesOpen}
            onClose={() => {
              setIsToolbarOpen(false)
              setToolbarAnimationComplete(false)
            }}
            animationComplete={toolbarAnimationComplete}
          />
        </motion.div>

        <Button
          onClick={(e) => {
            e.preventDefault()
            setIsToolbarOpen(true)
          }}
          variant="outline"
          size="md"
          label="Toolbar"
          disabled={isAcceptChangesOpen}
          type="button"
          hideLabel
          round
          icon={Masonry}
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
            disabled={isAcceptChangesOpen}
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
              disableButtons={isAcceptChangesOpen}
              hideLabel={useLittleMode}
            />
          </>
        )}
        {maxCharacters && !useLittleMode && (
          <p className="text-sm font-normal text-f1-border-hover">
            {editor.storage.characterCount.characters()}/{maxCharacters}
          </p>
        )}
      </div>

      <div className="flex flex-shrink-0 items-center gap-2">
        {secondaryAction && !useLittleMode && (
          <Button
            onClick={(e) => {
              e.preventDefault()
              secondaryAction.onClick()
            }}
            variant={secondaryAction.variant ?? "outline"}
            size="md"
            label={secondaryAction.label}
            disabled={isAcceptChangesOpen || secondaryAction.disabled}
            type="button"
          />
        )}
        {secondaryAction && primaryAction && !useLittleMode && (
          <ToolbarDivider />
        )}
        {primaryAction && (
          <Button
            onClick={(e) => {
              e.preventDefault()
              primaryAction.action.onClick()
            }}
            variant={primaryAction.action.variant ?? "default"}
            size="md"
            label={primaryAction.action.label}
            disabled={isAcceptChangesOpen || primaryAction.action.disabled}
            icon={primaryAction.action.icon ?? undefined}
            type="button"
          />
        )}
      </div>
    </div>
  )
}

export { Footer }
