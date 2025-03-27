import { Button } from "@/components/Actions/exports"
import { Input } from "@/ui/input"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { BubbleMenu, Editor } from "@tiptap/react"
import { useState } from "react"
import { EnhanceActivator } from "../Enhance"
import { enhanceConfig, linkPopupConfig } from "../utils/types"

interface LinkPopupProps {
  onSubmit: (url: string) => void
  linkPlaceholder: string
}

const LinkPopup = ({ onSubmit, linkPlaceholder }: LinkPopupProps) => {
  const [url, setUrl] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedUrl = url.trim()
      if (trimmedUrl === "") return
      const completeUrl = /^(https?:\/\/)/i.test(trimmedUrl)
        ? trimmedUrl
        : `https://${trimmedUrl}`
      onSubmit(completeUrl)
    }
  }

  return (
    <Input
      className="w-80 shadow-md"
      type="text"
      placeholder={linkPlaceholder}
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
}

interface EditorBubbleMenuProps {
  editor: Editor | null
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
  const [openDropdown, setOpenDropdown] = useState(false)

  if (!editor) return null
  if (!linkPopupConfig && !enhanceConfig) return null

  const handleTriggerClick = () => {
    if (!linkPopupConfig) return
    if (disableButtons) return
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run()
      setOpenDropdown(false)
    }
  }

  return (
    <BubbleMenu
      tippyOptions={{ duration: 100, placement: "bottom" }}
      editor={editor}
    >
      <div className="flex flex-row items-center gap-1 rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md">
        {linkPopupConfig && (
          <DropdownMenuPrimitive.Root
            open={openDropdown}
            onOpenChange={setOpenDropdown}
          >
            <DropdownMenuPrimitive.Trigger
              asChild
              onClick={(e) => {
                e.preventDefault()
                handleTriggerClick()
              }}
            >
              <Button
                onClick={(e) => {
                  e.preventDefault()
                }}
                label="Link"
                variant={editor.isActive("link") ? "neutral" : "ghost"}
                type="button"
                disabled={disableButtons}
              />
            </DropdownMenuPrimitive.Trigger>
            <DropdownMenuPrimitive.Content
              side="bottom"
              align="start"
              sideOffset={10}
              avoidCollisions={true}
              collisionPadding={10}
            >
              <LinkPopup
                onSubmit={(url) => {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange("link")
                    .setLink({ href: url })
                    .run()
                  setOpenDropdown(false)
                }}
                linkPlaceholder={linkPopupConfig.linkPlaceholder}
              />
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Root>
        )}

        {enhanceConfig && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            enhanceConfig={enhanceConfig}
            disableButtons={disableButtons}
            hideLabel={true}
          />
        )}
      </div>
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
