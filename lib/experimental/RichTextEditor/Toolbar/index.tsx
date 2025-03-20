// ToolbarPlugin.tsx
import React from "react"

import { Editor } from "@tiptap/react"

import { EnhancementOption } from "@/experimental/RichTextEditor"
import { EnhanceActivator } from "@/experimental/RichTextEditor/Enhance"
import { ToolbarButton } from "@/experimental/RichTextEditor/Toolbar/ToolbarButton"
import { ToolbarDropdown } from "@/experimental/RichTextEditor/Toolbar/ToolbarDropdown"
import {
  Code,
  Ellipsis,
  ExternalLink,
  List,
  Minus,
  Paperclip,
} from "@/icons/app"
import { cn } from "@/lib/utils"

const ToolbarDivider = ({ show = true }: { show?: boolean }) => (
  <div
    className={cn(
      "h-4 w-0.5 bg-f1-background-secondary-hover",
      show ? "block" : "hidden"
    )}
  />
)

interface ToolbarPluginProps {
  editor: Editor | null
  fileInputRef?: React.RefObject<HTMLInputElement>
  handleToggleFullscreen: () => void
  isFullscreen: boolean
  onEnhanceWithAI?: (
    selectedText: string,
    enhanceType?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isEnhancing: boolean
  canUseFiles: boolean
  canUseAi: boolean
  fullScreenEnabled: boolean
  enhancementOptions: EnhancementOption[]
}

const ToolbarPlugin = ({
  editor,
  handleToggleFullscreen,
  isFullscreen,
  onEnhanceWithAI,
  fileInputRef,
  isEnhancing,
  canUseFiles,
  canUseAi,
  fullScreenEnabled,
  enhancementOptions,
}: ToolbarPluginProps) => {
  if (!editor) {
    return null
  }

  const getHeadingLabel = () => {
    if (editor.isActive("heading")) {
      const headingLevel = editor.getAttributes("heading").level
      if (headingLevel === 1) return "H1"
      if (headingLevel === 2) return "H2"
      if (headingLevel === 3) return "H3"
    }
    return "Normal"
  }

  const getTextAlignLabel = () => {
    if (editor.isActive({ textAlign: "left" })) return "Left"
    if (editor.isActive({ textAlign: "center" })) return "Center"
    if (editor.isActive({ textAlign: "right" })) return "Right"
    if (editor.isActive({ textAlign: "justify" })) return "Justify"
    return "Left"
  }

  return (
    <div className="flex flex-row items-center justify-between gap-2 border-0 border-b-[1px] border-solid border-f1-border px-5 py-3">
      <div className="flex flex-row items-center gap-1 overflow-x-auto">
        <ToolbarButton
          label="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold (Ctrl+B)"
        />
        <ToolbarButton
          label="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic (Ctrl+I)"
        />
        <ToolbarButton
          label="Underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          title="Underline (Ctrl+U)"
        />
        <ToolbarDivider />
        <ToolbarDropdown
          isFullscreen={isFullscreen}
          items={[
            {
              label: "Normal",
              onClick: function Js() {
                editor
                  .chain()
                  .focus()
                  .toggleHeading({
                    level: editor.getAttributes("heading").level,
                  })
                  .run()
              },
              isActive: !editor.isActive("heading"),
            },
            {
              label: "H1",
              onClick: function Js() {
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              },
              isActive: editor.isActive("heading", { level: 1 }),
            },
            {
              label: "H2",
              onClick: function Js() {
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              },
              isActive: editor.isActive("heading", { level: 2 }),
            },
            {
              label: "H3",
              onClick: function Js() {
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              },
              isActive: editor.isActive("heading", { level: 3 }),
            },
          ]}
        >
          <ToolbarButton
            label={getHeadingLabel()}
            isActive={editor.isActive("heading")}
            title={getHeadingLabel()}
          />
        </ToolbarDropdown>
        <ToolbarDivider show={isFullscreen} />
        <ToolbarDropdown
          isFullscreen={isFullscreen}
          items={[
            {
              label: "Left",
              onClick: function Js() {
                editor.chain().focus().setTextAlign("left").run()
              },
              isActive:
                editor.isActive({ textAlign: "left" }) ||
                (!editor.isActive({ textAlign: "justify" }) &&
                  !editor.isActive({ textAlign: "center" }) &&
                  !editor.isActive({ textAlign: "right" })),
            },
            {
              label: "Center",
              onClick: function Js() {
                editor.chain().focus().setTextAlign("center").run()
              },
              isActive: editor.isActive({ textAlign: "center" }),
            },
            {
              label: "Right",
              onClick: function Js() {
                editor.chain().focus().setTextAlign("right").run()
              },
              isActive: editor.isActive({ textAlign: "right" }),
            },
            {
              label: "Justify",
              onClick: function Js() {
                editor.chain().focus().setTextAlign("justify").run()
              },
              isActive: editor.isActive({ textAlign: "justify" }),
            },
          ]}
        >
          <ToolbarButton
            label={getTextAlignLabel()}
            title={getTextAlignLabel()}
          />
        </ToolbarDropdown>

        <ToolbarDivider />

        <ToolbarButton
          icon={List}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Ordered List"
          label="Ordered List"
        />

        <ToolbarDivider />

        {canUseFiles && (
          <ToolbarButton
            icon={Paperclip}
            onClick={() => {
              if (fileInputRef && fileInputRef.current) {
                fileInputRef.current.click()
              } else {
                const fileInput = document.getElementById("upload-button")
                if (fileInput) {
                  fileInput.click()
                }
              }
            }}
            title="Add Attachment"
          />
        )}

        <ToolbarDropdown
          isFullscreen={isFullscreen}
          items={[
            {
              label: "Code Block",
              icon: Code,
              onClick: function Js() {
                editor.chain().focus().toggleCodeBlock().run()
              },
              isActive: editor.isActive("codeBlock"),
            },
            {
              label: "Horizontal Rule",
              icon: Minus,
              onClick: function Js() {
                editor.chain().focus().setHorizontalRule().run()
              },
              isActive: editor.isActive("horizontalRule"),
            },
            {
              label: "Quote",
              onClick: function Js() {
                editor.chain().focus().toggleBlockquote().run()
              },
              isActive: editor.isActive("blockquote"),
            },
          ]}
        >
          <ToolbarButton icon={Ellipsis} title="More options" />
        </ToolbarDropdown>
      </div>

      <div className="flex flex-row items-center gap-2">
        {canUseAi && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isEnhancing={isEnhancing}
            enhancementOptions={enhancementOptions}
          />
        )}

        {fullScreenEnabled && !isFullscreen && (
          <ToolbarButton
            icon={ExternalLink}
            onClick={handleToggleFullscreen}
            title="Expand"
          />
        )}
      </div>
    </div>
  )
}

export { ToolbarDivider, ToolbarPlugin }
