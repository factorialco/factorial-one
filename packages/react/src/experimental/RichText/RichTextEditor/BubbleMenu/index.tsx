import { Link } from "@/icons/app"
import * as Popover from "@radix-ui/react-popover"
import { BubbleMenu, Editor } from "@tiptap/react"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import screenfull from "screenfull"
import { Toolbar, ToolbarButton, ToolbarDivider } from "../Toolbar"
import { toolbarLabels } from "../utils/types"
import { LinkPopup } from "./LinkPopup"

interface EditorBubbleMenuProps {
  editor: Editor
  disableButtons: boolean
  toolbarLabels: toolbarLabels
}

const EditorBubbleMenu = ({
  editor,
  disableButtons,
  toolbarLabels,
}: EditorBubbleMenuProps) => {
  const [openLinkPopover, setOpenLinkPopover] = useState(false)

  const handleLinkButtonClick = () => {
    if (disableButtons) return
    setOpenLinkPopover(!openLinkPopover)
  }

  return (
    <BubbleMenu
      tippyOptions={{
        duration: 100,
        placement: "top",
        hideOnClick: false,
        appendTo: () =>
          document.getElementById("rich-text-editor-container") ||
          document.body,
      }}
      editor={editor}
    >
      <div className="dark z-50 flex w-max flex-row items-center rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-1 drop-shadow-sm">
        <Popover.Root
          open={openLinkPopover}
          onOpenChange={(open) => {
            setOpenLinkPopover(open)
          }}
        >
          <Popover.Trigger>
            <ToolbarButton
              active={editor.isActive("link") || openLinkPopover}
              label={toolbarLabels.linkLabel}
              icon={Link}
              disabled={disableButtons}
              onClick={handleLinkButtonClick}
              tooltip={undefined}
            />
          </Popover.Trigger>
          <ToolbarDivider />
          <Toolbar
            labels={toolbarLabels}
            editor={editor}
            disableButtons={disableButtons}
            mode="dark"
          />
          <Popover.Portal
            container={
              screenfull.isFullscreen && screenfull.element
                ? screenfull.element
                : document.body
            }
          >
            <Popover.Content
              side="top"
              align="start"
              sideOffset={10}
              alignOffset={-5}
              collisionPadding={10}
            >
              <AnimatePresence>
                {openLinkPopover && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Link popup"
                  >
                    <LinkPopup
                      editor={editor}
                      linkPlaceholder={toolbarLabels.linkPlaceholder}
                      onClose={() => setOpenLinkPopover(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
