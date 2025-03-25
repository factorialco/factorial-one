import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/exports"
import { Ai } from "@/icons/app"
import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import { useCallback, useRef, useState } from "react"
import screenfull from "screenfull"
import { isValidSelectionForEnhancement } from "../utils/enhance"
import { enhanceConfig } from "../utils/types"
import { AIEnhanceMenu } from "./EnhanceMenu"

interface EnhanceActivatorProps {
  editor: Editor
  onEnhanceWithAI?: (
    selectedText: string,
    enhanceType?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  button?: {
    variant?: "ghost" | "default" | "outline"
    size?: "md" | "sm"
    icon?: IconType
  }
  enhanceConfig?: enhanceConfig
  disableButtons: boolean
  hideLabel?: boolean
}

const EnhanceActivator = ({
  editor,
  onEnhanceWithAI,
  isLoadingEnhance,
  button = {
    variant: "outline",
    size: "md",
    icon: Ai,
  },
  enhanceConfig,
  disableButtons,
  hideLabel,
}: EnhanceActivatorProps) => {
  const enhanceButtonRef = useRef<HTMLButtonElement>(null)
  const [selectedRange, setSelectedRange] = useState<{
    from: number
    to: number
  } | null>(null)
  const [open, setOpen] = useState(false)

  const handleAIEnhance = useCallback(
    (optionId: string, customIntent?: string) => {
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

        if (from !== to) {
          textToEnhance = editor.state.doc.textBetween(from, to, " ")
        } else {
          textToEnhance = fullContent
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
        onEnhanceWithAI(textToEnhance, optionId, customIntent, context)
      }
      setOpen(false)
    },
    [editor, onEnhanceWithAI, selectedRange]
  )

  const handleEnhanceClick = useCallback(() => {
    if (!enhanceButtonRef.current || !editor) return

    const { from, to } = editor.state.selection
    if (from !== to) {
      setSelectedRange({ from, to })
      editor.view.dom.classList.add("maintain-selection")
    } else {
      setSelectedRange(null)
    }
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
          ref={enhanceButtonRef}
          variant={button.variant || "ghost"}
          size={button.size || "md"}
          label={enhanceConfig?.enhanceLabels.enhanceButtonLabel || "Enhance"}
          icon={button.icon || Ai}
          hideLabel={hideLabel ?? false}
          onClick={handleEnhanceClick}
          disabled={disableButtons}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          className={isLoadingEnhance ? "aiMagicLoading animate-pulse" : ""}
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
          side="bottom"
          align="center"
          sideOffset={5}
          collisionPadding={10}
          style={{ zIndex: 1000 }}
        >
          <AIEnhanceMenu
            canUseCustomPrompt={enhanceConfig?.canUseCustomPrompt || false}
            onSelect={handleAIEnhance}
            onClose={() => setOpen(false)}
            enhancementOptions={enhanceConfig?.enhancementOptions || []}
            inputPlaceholder={
              enhanceConfig?.enhanceLabels.customPromptPlaceholder || ""
            }
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export { EnhanceActivator }
