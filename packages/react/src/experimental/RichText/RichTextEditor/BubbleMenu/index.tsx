import { Button } from "@/components/Actions/exports"
import { Icon } from "@/factorial-one"
import { Add, Check, CrossedCircle } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Button as ButtonUI } from "@/ui/button"
import * as Popover from "@radix-ui/react-popover"
import { BubbleMenu, Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import screenfull from "screenfull"
import { EnhanceActivator } from "../Enhance"
import { enhanceConfig, linkPopupConfig } from "../utils/types"

interface LinkPopupProps {
  linkPlaceholder: string
  editor: Editor
  setOpenLinkPopover: (open: boolean) => void
}

const LinkPopup = ({
  linkPlaceholder,
  editor,
  setOpenLinkPopover,
}: LinkPopupProps) => {
  const [url, setUrl] = useState(editor.getAttributes("link").href || "")

  const checkIfUrlIsValid = (url: string) => {
    const trimmedUrl = url.trim()
    const isValidUrl =
      /^(https?:\/\/)([\w-]+(\.[\w-]+)+)(:[0-9]{1,5})?(\/.*)?$/i.test(
        trimmedUrl
      )
    return isValidUrl
  }

  const handleSave = () => {
    const trimmedUrl = url.trim()
    if (!trimmedUrl) return
    if (!checkIfUrlIsValid(trimmedUrl)) return
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: trimmedUrl })
      .run()
  }

  return (
    <div className="z-50 flex w-80 flex-col divide-y-[1px] divide-solid divide-f1-border-secondary rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background drop-shadow-sm">
      <div className="flex flex-col gap-3 p-2">
        <div
          className={cn(
            "flex w-full appearance-none items-center rounded-md border-0 bg-f1-background p-2 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
            focusRing("focus:ring-f1-border-hover")
          )}
        >
          <input
            className="w-full shrink disabled:cursor-not-allowed"
            type="text"
            placeholder={linkPlaceholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={editor.isActive("link")}
          />
          {editor.isActive("link") ? (
            <Icon
              icon={CrossedCircle}
              className="cursor-pointer text-f1-foreground-tertiary hover:text-f1-foreground-secondary"
              onClick={(e) => {
                e.preventDefault()
                editor.chain().focus().unsetLink().run()
                setUrl("")
              }}
            />
          ) : (
            checkIfUrlIsValid(url) && (
              <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-f1-icon-positive">
                <Icon icon={Check} className="text-f1-background" />
              </div>
            )
          )}
        </div>
        {!editor.isActive("link") && (
          <div className="flex flex-row gap-3">
            <Button // @ts-ignore
              className="w-full"
              label="Cancel"
              variant="outline"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setUrl("")
                setOpenLinkPopover(false)
                editor.chain().focus().run()
              }}
            />
            <Button // @ts-ignore
              className="w-full"
              label="Save"
              variant="default"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                handleSave()
              }}
              disabled={!checkIfUrlIsValid(url)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

interface EditorBubbleMenuProps {
  editor: Editor
  onEnhanceWithAI?: (
    selectedText: string,
    selectedIntent?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  disableButtons: boolean
  enhanceConfig: enhanceConfig | undefined
  linkPopupConfig?: linkPopupConfig | undefined
}

const EditorBubbleMenu = ({
  editor,
  onEnhanceWithAI,
  isLoadingEnhance,
  disableButtons,
  enhanceConfig,
  linkPopupConfig,
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
              name: "preventOverflow",
              options: {
                boundary:
                  document.getElementById("editor-container") ||
                  "clippingParents",
              },
            },
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
          />
        )}
      </div>
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
