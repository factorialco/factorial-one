import { useRef, useState } from "react"
import ReactDOM from "react-dom/client"

import { Button } from "@factorialco/factorial-one"
import { Input } from "@factorialco/factorial-one/dist/experimental"
import { BubbleMenu, Editor } from "@tiptap/react"
import tippy, { Instance } from "tippy.js"

import Box from "design-system/layouts/Box"

import { EnhancementOption } from "@/experimental/RichTextEditor"
import { EnhanceActivator } from "@/experimental/RichTextEditor/Enhance/index"
import { ToolbarButton } from "@/experimental/RichTextEditor/Toolbar/ToolbarButton"

interface EditorBubbleMenuProps {
  editor: Editor
  onEnhanceWithAI?: (
    selectedText: string,
    enhanceType?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isEnhancing: boolean
  canUseAi: boolean
  enhancementOptions: EnhancementOption[]
}

interface LinkPopupProps {
  onSubmit: (url: string) => void
}

const LinkPopup = ({ onSubmit }: LinkPopupProps) => {
  const [url, setUrl] = useState("")

  const handleSubmit = () => {
    const trimmedUrl = url.trim()
    if (trimmedUrl === "") {
      return
    }
    const completeUrl = /^(https?:\/\/)/i.test(trimmedUrl)
      ? trimmedUrl
      : `https://${trimmedUrl}`
    onSubmit(completeUrl)
  }

  return (
    <Box
      gap="s8"
      paddingX="s12"
      paddingY="s12"
      borderRadius={{ all: "abs012" }}
      border={{ all: { color: "grey300", style: "solid", width: "s1" } }}
      background="white"
      boxShadow="s200"
      width="s360"
      justifyContent="center"
    >
      <Box flexDirection="row" gap="s4" alignItems="center">
        <Input
          type="text"
          placeholder="Enter the URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value)
          }}
        />
        <Button
          disabled={url.trim() === ""}
          label="Apply"
          onClick={handleSubmit}
          size="md"
          variant="default"
        />
      </Box>
    </Box>
  )
}

const EditorBubbleMenu = ({
  editor,
  canUseAi,
  onEnhanceWithAI,
  isEnhancing,
  enhancementOptions,
}: EditorBubbleMenuProps) => {
  const tippyInstanceRef = useRef<Instance | null>(null)
  const linkButtonRef = useRef<HTMLButtonElement>(null)

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
      <Box
        ref={linkButtonRef}
        flexDirection="row"
        alignItems="center"
        gap="s8"
        background="white"
        paddingX="s8"
        paddingY="s8"
        borderRadius={{ all: "abs008" }}
        boxShadow="s200"
      >
        <ToolbarButton
          icon="link"
          onClick={handleLinkClick}
          isActive={editor.isActive("link")}
          title="Add/Remove Link"
        />

        {canUseAi && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isEnhancing={isEnhancing}
            button={{
              hideLabel: true,
              variant: "ghost",
            }}
            enhancementOptions={enhancementOptions}
          />
        )}
      </Box>
    </BubbleMenu>
  )
}

export { EditorBubbleMenu }
