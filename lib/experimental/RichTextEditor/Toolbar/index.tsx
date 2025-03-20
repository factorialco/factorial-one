// ToolbarPlugin.tsx
import React from "react"

import { Editor } from "@tiptap/react"

import Icon from "design-system/Icon"
import Box from "design-system/layouts/Box"

import { EnhancementOption } from "@/experimental/RichTextEditor"
import { EnhanceActivator } from "@/experimental/RichTextEditor/Toolbar/EnhanceActivator"
import { ToolbarButton } from "@/experimental/RichTextEditor/Toolbar/ToolbarButton"
import { ToolbarDropdown } from "@/experimental/RichTextEditor/Toolbar/ToolbarDropdown"

const ToolbarDivider = ({ show = true }: { show?: boolean }) => (
  <Box
    width="s1"
    height="s16"
    background="grey400"
    borderRadius={{ all: "abs004" }}
    style={{ display: show ? "block" : "none" }}
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

  const getHeadingIcon = () => {
    if (editor.isActive("heading")) {
      const headingLevel = editor.getAttributes("heading").level
      if (headingLevel === 1) return "h1"
      if (headingLevel === 2) return "h2"
      if (headingLevel === 3) return "h3"
    }
    return "text-size"
  }

  const getTextAlignIcon = () => {
    if (editor.isActive({ textAlign: "left" })) return "align-text-left"
    if (editor.isActive({ textAlign: "center" })) return "align-text-center"
    if (editor.isActive({ textAlign: "right" })) return "align-text-right"
    if (editor.isActive({ textAlign: "justify" })) return "align-text-justify"
    return "align-text-left"
  }

  return (
    <Box
      alignItems="center"
      paddingY="s12"
      paddingX="s20"
      border={{ bottom: { color: "grey300", style: "solid", width: "s1" } }}
      flexDirection="row"
      gap="s8"
      id="rich-text-editor-toolbar-root"
    >
      <Box
        alignItems="center"
        flexDirection="row"
        gap="s8"
        flexGrow
        overflowX="auto"
      >
        <ToolbarButton
          icon="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold (Ctrl+B)"
        />
        <ToolbarButton
          icon="italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic (Ctrl+I)"
        />
        <ToolbarButton
          icon="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          title="Underline (Ctrl+U)"
        />
        <ToolbarDivider />
        <ToolbarDropdown
          isFullscreen={isFullscreen}
          items={[
            {
              label: "Normal text",
              onClick: function Js() {
                editor
                  .chain()
                  .focus()
                  .toggleHeading({
                    level: editor.getAttributes("heading").level,
                  })
                  .run()
              },
              icon: "text-size",
              isActive: !editor.isActive("heading"),
            },
            {
              label: "Heading 1",
              onClick: function Js() {
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              },
              icon: "h1",
              isActive: editor.isActive("heading", { level: 1 }),
            },
            {
              label: "Heading 2",
              onClick: function Js() {
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              },
              icon: "h2",
              isActive: editor.isActive("heading", { level: 2 }),
            },
            {
              label: "Heading 3",
              onClick: function Js() {
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              },
              icon: "h3",
              isActive: editor.isActive("heading", { level: 3 }),
            },
          ]}
        >
          <button
            className={`toolbar-button ${editor.isActive("heading") && "active"}`}
            title="Heading"
          >
            <Icon.Medium icon={getHeadingIcon()} color="grey800" />
          </button>
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
              icon: "align-text-left",
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
              icon: "align-text-center",
              isActive: editor.isActive({ textAlign: "center" }),
            },
            {
              label: "Right",
              onClick: function Js() {
                editor.chain().focus().setTextAlign("right").run()
              },
              icon: "align-text-right",
              isActive: editor.isActive({ textAlign: "right" }),
            },
            {
              label: "Justify",
              onClick: function Js() {
                editor.chain().focus().setTextAlign("justify").run()
              },
              icon: "align-text-justify",
              isActive: editor.isActive({ textAlign: "justify" }),
            },
          ]}
        >
          <button className="toolbar-button" title="Align text">
            <Icon.Medium icon={getTextAlignIcon()} color="grey800" />
          </button>
        </ToolbarDropdown>

        <ToolbarDivider />

        <ToolbarButton
          icon="list"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        />
        <ToolbarButton
          icon="ol-list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Ordered List"
        />

        <ToolbarDivider />

        {canUseFiles && (
          <ToolbarButton
            icon="paperclip"
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
              icon: "code",
              onClick: function Js() {
                editor.chain().focus().toggleCodeBlock().run()
              },
              isActive: editor.isActive("codeBlock"),
            },
            {
              label: "Horizontal Rule",
              icon: "remove",
              onClick: function Js() {
                editor.chain().focus().setHorizontalRule().run()
              },
              isActive: editor.isActive("horizontalRule"),
            },
            {
              label: "Quote",
              icon: "quote",
              onClick: function Js() {
                editor.chain().focus().toggleBlockquote().run()
              },
              isActive: editor.isActive("blockquote"),
            },
          ]}
        >
          <button className="toolbar-button" title="More options">
            <Icon.Medium icon="ellipsis" color="grey800" />
          </button>
        </ToolbarDropdown>
      </Box>

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
          icon={"expand"}
          onClick={handleToggleFullscreen}
          title="Expand"
        />
      )}
    </Box>
  )
}

export { ToolbarDivider, ToolbarPlugin }
