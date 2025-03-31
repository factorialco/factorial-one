import { Icon } from "@/factorial-one"
import { Add } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Button as ButtonUI } from "@/ui/button"
import * as Popover from "@radix-ui/react-popover"
import { BubbleMenu, Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import screenfull from "screenfull"
import { EnhanceActivator } from "../Enhance"
import { enhanceConfig, linkPopupConfig } from "../utils/types"
import { LinkPopup } from "./LinkPopup"

interface EditorBubbleMenuProps {
  editor: Editor
  onEnhanceWithAI: (
    selectedIntent?: string,
    customIntent?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  disableButtons: boolean
  enhanceConfig: enhanceConfig | undefined
  linkPopupConfig?: linkPopupConfig | undefined
  setLastIntent: (
    lastIntent: {
      selectedIntent?: string
      customIntent?: string
    } | null
  ) => void
}

const EditorBubbleMenu = ({
  editor,
  onEnhanceWithAI,
  isLoadingEnhance,
  disableButtons,
  enhanceConfig,
  linkPopupConfig,
  setLastIntent,
}: EditorBubbleMenuProps) => {
  const [openLinkPopover, setOpenLinkPopover] = useState(false)

  if (!linkPopupConfig && !enhanceConfig) return null

  const handleTriggerClick = () => {
    if (!linkPopupConfig || disableButtons) return
    setOpenLinkPopover((prev) => !prev)
  }

  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "top",
        hideOnClick: false,
        popperOptions: {
          modifiers: [
            {
              name: "flip",
              options: {
                fallbackPlacements: ["bottom", "right", "left"],
              },
            },
          ],
        },
      }}
      editor={editor}
    >
      <div className="z-50 flex flex-row items-center gap-1 rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm">
        {linkPopupConfig && (
          <Popover.Root
            open={openLinkPopover}
            onOpenChange={setOpenLinkPopover}
          >
            <Popover.Trigger asChild>
              <ButtonUI
                variant="outline"
                size="md"
                onClick={handleTriggerClick}
                className={cn(
                  "flex aspect-square items-center transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
                  editor.isActive("link")
                    ? "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
                    : "hover:bg-f1-background-secondary-hover"
                )}
                disabled={disableButtons}
                aria-label="Link"
              >
                <Icon
                  icon={Add}
                  className={
                    editor.isActive("link")
                      ? "text-f1-icon-selected"
                      : "text-f1-foreground"
                  }
                />

                <p
                  className={
                    editor.isActive("link")
                      ? "text-f1-icon-selected"
                      : "text-f1-foreground"
                  }
                >
                  {linkPopupConfig.linkLabel}
                </p>
              </ButtonUI>
            </Popover.Trigger>
            <Popover.Portal
              container={
                screenfull.isFullscreen && screenfull.element
                  ? screenfull.element
                  : document.body
              }
            >
              <Popover.Content
                side="bottom"
                align="start"
                sideOffset={15}
                collisionPadding={10}
              >
                <AnimatePresence>
                  {openLinkPopover && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <LinkPopup
                        aria-label="Link popup"
                        editor={editor}
                        linkPlaceholder={linkPopupConfig.linkPlaceholder}
                        setOpenLinkPopover={setOpenLinkPopover}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        )}

        {enhanceConfig && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            enhanceConfig={enhanceConfig}
            disableButtons={disableButtons}
            setLastIntent={setLastIntent}
          />
        )}
      </div>
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
