import { Button } from "@/components/Actions/exports"
import { Input } from "@/ui/input"
import { BubbleMenu, Editor } from "@tiptap/react"
import { useRef, useState } from "react"
import ReactDOM from "react-dom/client"
import tippy, { Instance } from "tippy.js"
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
      if (trimmedUrl === "") {
        return
      }
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
      onChange={(e) => {
        setUrl(e.target.value)
      }}
      onKeyDown={handleKeyDown}
    />
  )
}

interface EditorBubbleMenuProps {
  editor: Editor
  onEnhanceWithAI?: (
    selectedText: string,
    enhanceType?: string,
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
  const tippyInstanceRef = useRef<Instance | null>(null)
  const linkButtonRef = useRef<HTMLDivElement>(null)

  const handleLinkClick = () => {
    if (!linkPopupConfig) return
    if (disableButtons) return
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run()
      return
    }
    if (!linkButtonRef.current) return
    if (tippyInstanceRef.current) {
      tippyInstanceRef.current.destroy()
      tippyInstanceRef.current = null
    }
    const container = document.createElement("div")
    const root = ReactDOM.createRoot(container)

    root.render(
      <LinkPopup
        onSubmit={(url) => {
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run()
          tippyInstanceRef.current?.hide()
        }}
        linkPlaceholder={linkPopupConfig.linkPlaceholder}
      />
    )

    tippyInstanceRef.current = tippy(linkButtonRef.current, {
      content: container,
      trigger: "manual",
      interactive: true,
      placement: "bottom",
      onHidden(instance) {
        instance.destroy()
        tippyInstanceRef.current = null
        root.unmount()
      },
    })
    tippyInstanceRef.current.show()
  }

  if (!linkPopupConfig && !enhanceConfig) return null

  return (
    <BubbleMenu
      tippyOptions={{ duration: 100, placement: "bottom" }}
      editor={editor}
    >
      <div
        ref={linkButtonRef}
        className="flex flex-row items-center gap-1 rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
      >
        {linkPopupConfig && (
          <Button
            onClick={handleLinkClick}
            label="Link"
            variant={editor.isActive("link") ? "neutral" : "ghost"}
            type="button"
            disabled={disableButtons}
          />
        )}

        {enhanceConfig && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            button={{
              variant: "ghost",
            }}
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
