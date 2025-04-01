import { Button } from "@/components/Actions/Button"
import { Ai } from "@/icons/app"
import { cn } from "@/lib/utils"
import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import { useRef, useState } from "react"
import screenfull from "screenfull"
import { enhanceConfig } from "../utils/types"
import { AIEnhanceMenu } from "./EnhanceMenu"

interface EnhanceActivatorProps {
  editor: Editor
  onEnhanceWithAI: (
    selectedOption?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  enhanceConfig?: enhanceConfig
  disableButtons: boolean
  hideLabel?: boolean
  position?: "top" | "bottom"
  setLastIntent: (
    lastIntent: {
      selectedIntent?: string
      customIntent?: string
    } | null
  ) => void
}

const EnhanceActivator = ({
  editor,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  disableButtons,
  hideLabel,
  position = "bottom",
  setLastIntent,
}: EnhanceActivatorProps) => {
  const enhanceButtonRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const handleEnhanceClick = () => {
    if (!enhanceButtonRef.current) setOpen(false)
    else setOpen((prev) => !prev)
  }

  return (
    <Popover.Root
      open={open}
      modal={false}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) {
          editor.view.dom.classList.remove("maintain-selection")
        }
      }}
    >
      <Popover.Trigger asChild>
        <Button
          type="button"
          ref={enhanceButtonRef}
          variant="ghost"
          size="md"
          label={enhanceConfig?.enhanceLabels.enhanceButtonLabel || ""}
          icon={Ai}
          hideLabel={
            (hideLabel || !enhanceConfig?.enhanceLabels.enhanceButtonLabel) ??
            false
          }
          onClick={(e) => {
            e.preventDefault()
            handleEnhanceClick()
          }}
          disabled={disableButtons}
          // @ts-expect-error
          className={cn(
            "magicBackground magicColor",
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
                  onSelect={({ selectedIntent, customIntent }) => {
                    onEnhanceWithAI(selectedIntent, customIntent)
                    setLastIntent({
                      selectedIntent: selectedIntent || undefined,
                      customIntent: customIntent || undefined,
                    })
                    setOpen(false)
                  }}
                  onClose={() => {
                    setOpen(false)
                  }}
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
