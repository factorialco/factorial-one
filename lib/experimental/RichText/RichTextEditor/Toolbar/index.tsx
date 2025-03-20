// ToolbarPlugin.tsx
import React from "react"

import { Editor } from "@tiptap/react"

import { EnhancementOption } from "@/experimental/RichText/RichTextEditor"
import { EnhanceActivator } from "@/experimental/RichText/RichTextEditor/Enhance"
import { ToolbarDropdown } from "@/experimental/RichText/RichTextEditor/Toolbar/ToolbarDropdown"
import { Button } from "@/factorial-one"
import { Code, Ellipsis, Minus, Paperclip } from "@/icons/app"
import { cn } from "@/lib/utils"

const ToolbarDivider = ({ show = true }: { show?: boolean }) => (
  <div
    className={cn(
      "mx-1 h-4 w-0.5 bg-f1-background-secondary-hover",
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
  isLoadingAi: boolean
  canUseFiles: boolean
  canUseAi: boolean
  fullScreenEnabled: boolean
  enhancementOptions: EnhancementOption[]
  canUseCustomPrompt: boolean
}

const ToolbarPlugin = ({
  editor,
  handleToggleFullscreen,
  isFullscreen,
  onEnhanceWithAI,
  fileInputRef,
  isLoadingAi,
  canUseFiles,
  canUseAi,
  fullScreenEnabled,
  enhancementOptions,
  canUseCustomPrompt,
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
    <div className="flex flex-row items-center justify-between gap-2 border-0 border-b-[1px] border-solid border-f1-border py-3">
      <div className="flex flex-row items-center overflow-x-auto pl-4">
        <Button
          variant={editor.isActive("bold") ? "neutral" : "ghost"}
          label="Bold"
          onClick={() => {
            editor.chain().focus().toggleBold().run()
          }}
          type="button"
        />
        <Button
          variant={editor.isActive("italic") ? "neutral" : "ghost"}
          label="Italic"
          onClick={() => {
            editor.chain().focus().toggleItalic().run()
          }}
          type="button"
        />
        <Button
          variant={editor.isActive("underline") ? "neutral" : "ghost"}
          label="Underline"
          onClick={() => {
            editor.chain().focus().toggleUnderline().run()
          }}
          type="button"
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
          <Button variant={"ghost"} size="md" label={getHeadingLabel()} />
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
          <Button variant={"ghost"} size="md" label={getTextAlignLabel()} />
        </ToolbarDropdown>

        <ToolbarDivider />

        <Button
          onClick={() => {
            editor.chain().focus().toggleBulletList().run()
          }}
          variant={editor.isActive("bulletList") ? "neutral" : "ghost"}
          label="Bullet List"
          type="button"
        />
        <Button
          onClick={() => {
            editor.chain().focus().toggleOrderedList().run()
          }}
          variant={editor.isActive("orderedList") ? "neutral" : "ghost"}
          label="Ordered List"
          type="button"
        />

        <ToolbarDivider />

        {canUseFiles && (
          <Button
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
            hideLabel
            label="Add Attachment"
            variant="ghost"
            type="button"
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
          <Button
            variant="ghost"
            size="md"
            icon={Ellipsis}
            hideLabel
            label="More options"
          />
        </ToolbarDropdown>
      </div>

      <div className="flex flex-row items-center gap-2 pr-4">
        {canUseAi && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingAi={isLoadingAi}
            enhancementOptions={enhancementOptions}
            canUseCustomPrompt={canUseCustomPrompt}
          />
        )}

        {fullScreenEnabled && !isFullscreen && (
          <Button
            onClick={handleToggleFullscreen}
            label="Fullscreen"
            variant="ghost"
            type="button"
          />
        )}
      </div>
    </div>
  )
}

export { ToolbarDivider, ToolbarPlugin }
