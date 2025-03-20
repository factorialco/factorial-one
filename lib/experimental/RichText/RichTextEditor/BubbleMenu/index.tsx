import { useRef, useState } from "react"
import ReactDOM from "react-dom/client"

import { BubbleMenu, Editor } from "@tiptap/react"
import tippy, { Instance } from "tippy.js"

import { Button } from "@/components/Actions/exports"
import { EnhancementOption } from "@/experimental/RichText/RichTextEditor"
import { EnhanceActivator } from "@/experimental/RichText/RichTextEditor/Enhance"
import { Input } from "@/ui/input"

interface EditorBubbleMenuProps {
  editor: Editor
  onEnhanceWithAI?: (
    selectedText: string,
    enhanceType?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isLoadingAi: boolean
  canUseAi: boolean
  enhancementOptions: EnhancementOption[]
  canUseCustomPrompt: boolean
}

interface LinkPopupProps {
  onSubmit: (url: string) => void
}

const LinkPopup = ({ onSubmit }: LinkPopupProps) => {
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
      placeholder="Enter the URL"
      value={url}
      onChange={(e) => {
        setUrl(e.target.value)
      }}
      onKeyDown={handleKeyDown}
    />
  )
}

const EditorBubbleMenu = ({
  editor,
  canUseAi,
  onEnhanceWithAI,
  isLoadingAi,
  enhancementOptions,
  canUseCustomPrompt,
}: EditorBubbleMenuProps) => {
  const tippyInstanceRef = useRef<Instance | null>(null)
  const linkButtonRef = useRef<HTMLDivElement>(null)

  const handleLinkClick = () => {
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

  return (
    <BubbleMenu
      tippyOptions={{ duration: 100, placement: "bottom" }}
      editor={editor}
    >
      <div
        ref={linkButtonRef}
        className="flex flex-row items-center gap-1 rounded-lg border-[1px] border-solid border-f1-border-secondary bg-f1-background p-1 shadow-md"
      >
        <Button
          onClick={handleLinkClick}
          label="Link"
          variant={editor.isActive("link") ? "neutral" : "ghost"}
          type="button"
        />

        {canUseAi && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingAi={isLoadingAi}
            button={{
              hideLabel: true,
              variant: "ghost",
            }}
            enhancementOptions={enhancementOptions}
            canUseCustomPrompt={canUseCustomPrompt}
          />
        )}
      </div>
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
