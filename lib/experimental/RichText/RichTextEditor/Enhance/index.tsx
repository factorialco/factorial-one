import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/exports"
import { Ai } from "@/icons/app"
import { Editor } from "@tiptap/react"
import { useCallback, useRef, useState } from "react"
import ReactDOM from "react-dom/client"
import tippy, { Instance } from "tippy.js"
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
  const tippyInstanceRef = useRef<Instance | null>(null)
  const enhanceButtonRef = useRef<HTMLButtonElement>(null)
  const [selectedRange, setSelectedRange] = useState<{
    from: number
    to: number
  } | null>(null)

  const handleAIEnhance = useCallback(
    (optionId: string, customIntent?: string) => {
      if (!editor) return

      let textToEnhance = ""
      let context = ""
      let from = 0
      let to = 0

      // Get the full HTML content of the editor
      const fullContent = editor.getHTML()

      if (selectedRange) {
        from = selectedRange.from
        to = selectedRange.to

        // For selected text, we'll use the plain text for now
        // The user will still see the enhancement applied with proper HTML formatting
        textToEnhance = editor.state.doc.textBetween(from, to, " ")
      } else {
        const selection = editor.state.selection
        from = selection.from
        to = selection.to

        if (from !== to) {
          // For selected text, use the plain text
          textToEnhance = editor.state.doc.textBetween(from, to, " ")
        } else {
          // If no selection, use the entire HTML content
          textToEnhance = fullContent
          from = 0
          to = editor.state.doc.content.size
        }
      }

      // Limit selected text to 5000 characters
      if (textToEnhance.length > 5000) {
        textToEnhance = textToEnhance.substring(0, 5000)
      }

      // For context, we'll send the full HTML if it's within size limits
      if (fullContent.length < 10000) {
        // For small documents, use the full content as context
        context = fullContent
      } else {
        // For larger documents, fallback to plain text for context around the selection
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

      if (tippyInstanceRef.current) {
        tippyInstanceRef.current.hide()
      }
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

    if (tippyInstanceRef.current) {
      tippyInstanceRef.current.destroy()
      tippyInstanceRef.current = null
    }

    const container = document.createElement("div")
    const root = ReactDOM.createRoot(container)

    root.render(
      <AIEnhanceMenu
        canUseCustomPrompt={enhanceConfig?.canUseCustomPrompt || false}
        onSelect={handleAIEnhance}
        onClose={() => tippyInstanceRef.current?.hide()}
        enhancementOptions={enhanceConfig?.enhancementOptions || []}
        inputPlaceholder={
          enhanceConfig?.enhanceLabels.customPromptPlaceholder || ""
        }
      />
    )

    tippyInstanceRef.current = tippy(enhanceButtonRef.current, {
      content: container,
      trigger: "manual",
      interactive: true,
      placement: "bottom-start",
      arrow: true,
      theme: "light",
      onHidden(instance) {
        instance.destroy()
        tippyInstanceRef.current = null
        setSelectedRange(null)
        root.unmount()
        if (editor) {
          editor.view.dom.classList.remove("maintain-selection")
        }
      },
    })

    tippyInstanceRef.current.show()
  }, [editor, handleAIEnhance])

  return (
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
  )
}

export { EnhanceActivator }
