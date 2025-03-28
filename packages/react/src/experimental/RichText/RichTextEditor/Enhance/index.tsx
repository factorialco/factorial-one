import { Button } from "@/components/Actions/Button"
import { Ai } from "@/icons/app"
import { cn } from "@/lib/utils"
import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import { useCallback, useRef, useState } from "react"
import screenfull from "screenfull"
import { isValidSelectionForEnhancement } from "../utils/enhance"
import { enhanceConfig } from "../utils/types"
import { AIEnhanceMenu } from "./EnhanceMenu"

interface EnhanceActivatorProps {
  editor: Editor
  onEnhanceWithAI?: (
    selectedText: string,
    selectedOption?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  enhanceConfig?: enhanceConfig
  disableButtons: boolean
  hideLabel?: boolean
  position?: "top" | "bottom"
}

const EnhanceActivator = ({
  editor,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  disableButtons,
  hideLabel,
  position = "bottom",
}: EnhanceActivatorProps) => {
  const enhanceButtonRef = useRef<HTMLButtonElement>(null)
  const [selectedRange, setSelectedRange] = useState<{
    from: number
    to: number
  } | null>(null)
  const [open, setOpen] = useState(false)

  const handleAIEnhance = useCallback(
    ({
      selectedIntent,
      customIntent,
    }: {
      selectedIntent?: string
      customIntent?: string
    }) => {
      if (!editor) return

      let textToEnhance = ""
      let context = ""
      let from = 0
      let to = 0

      const fullContent = editor.getHTML()

      if (selectedRange) {
        from = selectedRange.from
        to = selectedRange.to
        textToEnhance = editor.state.doc.textBetween(from, to, " ")
      } else {
        const selection = editor.state.selection
        from = selection.from
        to = selection.to
        textToEnhance =
          from !== to
            ? editor.state.doc.textBetween(from, to, " ")
            : fullContent
        if (from === to) {
          from = 0
          to = editor.state.doc.content.size
        }
      }

      if (textToEnhance.length > 5000) {
        textToEnhance = textToEnhance.substring(0, 5000)
      }
      if (fullContent.length < 10000) {
        context = fullContent
      } else {
        const beforeChars = 2500
        const afterChars = 2500
        const contextStart = Math.max(0, from - beforeChars)
        const beforeText = editor.state.doc.textBetween(contextStart, from, " ")
        const contextEnd = Math.min(
          editor.state.doc.content.size,
          to + afterChars
        )
        const afterText = editor.state.doc.textBetween(to, contextEnd, " ")
        context = beforeText + " " + afterText
      }

      if (isValidSelectionForEnhancement(textToEnhance) && onEnhanceWithAI) {
        onEnhanceWithAI(textToEnhance, selectedIntent, customIntent, context)
      }
      setOpen(false)
    },
    [editor, onEnhanceWithAI, selectedRange]
  )

  const handleEnhanceClick = useCallback(() => {
    if (!enhanceButtonRef.current || !editor) return

    const { from, to } = editor.state.selection
    setSelectedRange(from !== to ? { from, to } : null)
    setOpen(true)
  }, [editor])

  return (
    <Popover.Root
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) {
          setSelectedRange(null)
          editor.view.dom.classList.remove("maintain-selection")
        }
      }}
      modal={false}
    >
      <Popover.Trigger asChild>
        <Button
          type="button"
          ref={enhanceButtonRef}
          variant="ghost"
          size="md"
          label={enhanceConfig?.enhanceLabels.enhanceButtonLabel || "Enhance"}
          icon={Ai}
          hideLabel={hideLabel ?? false}
          onClick={(e) => {
            e.preventDefault()
            handleEnhanceClick()
          }}
          disabled={disableButtons}
          // @ts-ignore
          className={cn(
            "magicBackground magicBorder magicColor",
            isLoadingEnhance && "animate-pulse"
          )}
        />
      </Popover.Trigger>
      <Popover.Portal
        container={
          screenfull.isFullscreen && screenfull.element
            ? screenfull.element
            : undefined
        }
      >
        <Popover.Content
          side={position}
          align="start"
          sideOffset={15}
          collisionPadding={10}
          style={{ zIndex: 1000 }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <AIEnhanceMenu
                  canUseCustomPrompt={
                    enhanceConfig?.canUseCustomPrompt || false
                  }
                  onSelect={handleAIEnhance}
                  onClose={() => setOpen(false)}
                  enhancementOptions={enhanceConfig?.enhancementOptions || []}
                  inputPlaceholder={
                    enhanceConfig?.enhanceLabels.customPromptPlaceholder || ""
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export { EnhanceActivator }
