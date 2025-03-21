import { Button } from "@/components/Actions/Button"
import {
  EnhancementOption,
  toolbarConfig,
} from "@/experimental/RichText/RichTextEditor"
import { EnhanceActivator } from "@/experimental/RichText/RichTextEditor/Enhance"
import { ToolbarDropdown } from "@/experimental/RichText/RichTextEditor/Toolbar/ToolbarDropdown"
import { defaultToolbarConfig } from "@/experimental/RichText/RichTextEditor/utils/toolbar"
import { Ellipsis, Paperclip } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Editor } from "@tiptap/react"
import { compact, defaultsDeep } from "lodash"
import React from "react"

const ToolbarDivider = ({ show = true }: { show?: boolean }) => (
  <div
    className={cn(
      "mx-1 h-4 w-0.5 bg-f1-background-secondary-hover",
      show ? "block" : "hidden"
    )}
  />
)

const intersperse = (arr: React.ReactNode[], sep: React.ReactNode) =>
  arr.flatMap((item, index) => (index < arr.length - 1 ? [item, sep] : [item]))

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
  enhancementOptions: EnhancementOption[]
  canUseCustomPrompt: boolean
  config: toolbarConfig
  disableButtons: boolean
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
  enhancementOptions,
  canUseCustomPrompt,
  config,
  disableButtons,
}: ToolbarPluginProps) => {
  if (!editor) return null

  const mergedConfig = defaultsDeep({}, config, defaultToolbarConfig)

  const {
    bold,
    italic,
    underline,
    textSize: { normal, heading1, heading2, heading3 },
    textAlign: { left, center, right, justify },
    list: { bullet, ordered },
    moreOptions: { code, horizontalRule, quote },
    fullScreen,
  } = mergedConfig

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

  const formattingGroup =
    bold || italic || underline ? (
      <div className="flex flex-row items-center gap-2">
        {bold && (
          <Button
            variant={editor.isActive("bold") ? "neutral" : "ghost"}
            label="Bold"
            onClick={() => {
              editor.chain().focus().toggleBold().run()
            }}
            type="button"
            disabled={disableButtons}
          />
        )}
        {italic && (
          <Button
            variant={editor.isActive("italic") ? "neutral" : "ghost"}
            label="Italic"
            onClick={() => {
              editor.chain().focus().toggleItalic().run()
            }}
            type="button"
            disabled={disableButtons}
          />
        )}
        {underline && (
          <Button
            variant={editor.isActive("underline") ? "neutral" : "ghost"}
            label="Underline"
            onClick={() => {
              editor.chain().focus().toggleUnderline().run()
            }}
            type="button"
            disabled={disableButtons}
          />
        )}
      </div>
    ) : null

  const textSizeGroup =
    normal || heading1 || heading2 || heading3 ? (
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={compact([
          normal && {
            label: "Normal",
            onClick: () =>
              editor
                .chain()
                .focus()
                .toggleHeading({ level: editor.getAttributes("heading").level })
                .run(),
            isActive: !editor.isActive("heading"),
          },
          heading1 && {
            label: "H1",
            onClick: () =>
              editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: editor.isActive("heading", { level: 1 }),
          },
          heading2 && {
            label: "H2",
            onClick: () =>
              editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: editor.isActive("heading", { level: 2 }),
          },
          heading3 && {
            label: "H3",
            onClick: () =>
              editor.chain().focus().toggleHeading({ level: 3 }).run(),
            isActive: editor.isActive("heading", { level: 3 }),
          },
        ])}
        disabled={disableButtons}
      >
        <Button
          variant="ghost"
          size="md"
          label={getHeadingLabel()}
          disabled={disableButtons}
        />
      </ToolbarDropdown>
    ) : null

  const textAlignGroup =
    left || center || right || justify ? (
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={compact([
          left && {
            label: "Left",
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            isActive:
              editor.isActive({ textAlign: "left" }) ||
              (!editor.isActive({ textAlign: "justify" }) &&
                !editor.isActive({ textAlign: "center" }) &&
                !editor.isActive({ textAlign: "right" })),
          },
          center && {
            label: "Center",
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            isActive: editor.isActive({ textAlign: "center" }),
          },
          right && {
            label: "Right",
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            isActive: editor.isActive({ textAlign: "right" }),
          },
          justify && {
            label: "Justify",
            onClick: () => editor.chain().focus().setTextAlign("justify").run(),
            isActive: editor.isActive({ textAlign: "justify" }),
          },
        ])}
        disabled={disableButtons}
      >
        <Button
          variant="ghost"
          size="md"
          label={getTextAlignLabel()}
          disabled={disableButtons}
        />
      </ToolbarDropdown>
    ) : null

  const listGroup =
    bullet || ordered ? (
      <div className="flex flex-row items-center gap-2">
        {bullet && (
          <Button
            onClick={() => {
              editor.chain().focus().toggleBulletList().run()
            }}
            variant={editor.isActive("bulletList") ? "neutral" : "ghost"}
            label="Bullet List"
            type="button"
            disabled={disableButtons}
          />
        )}
        {ordered && (
          <Button
            onClick={() => {
              editor.chain().focus().toggleOrderedList().run()
            }}
            variant={editor.isActive("orderedList") ? "neutral" : "ghost"}
            label="Ordered List"
            type="button"
            disabled={disableButtons}
          />
        )}
      </div>
    ) : null

  const fileGroup = canUseFiles && (
    <Button
      icon={Paperclip}
      onClick={() => {
        if (fileInputRef?.current) {
          fileInputRef.current.click()
        } else {
          const fileInput = document.getElementById("upload-button")
          if (fileInput) fileInput.click()
        }
      }}
      hideLabel
      label="Add Attachment"
      variant="ghost"
      type="button"
      disabled={disableButtons}
    />
  )

  const moreOptionsGroup =
    code || horizontalRule || quote ? (
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={compact([
          code && {
            label: "Code Block",
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: editor.isActive("codeBlock"),
          },
          horizontalRule && {
            label: "Horizontal Rule",
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            isActive: editor.isActive("horizontalRule"),
          },
          quote && {
            label: "Quote",
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: editor.isActive("blockquote"),
          },
        ])}
        disabled={disableButtons}
      >
        <Button
          variant="ghost"
          size="md"
          icon={Ellipsis}
          hideLabel
          label="More options"
          disabled={disableButtons}
        />
      </ToolbarDropdown>
    ) : null

  const groups = compact([
    formattingGroup,
    textSizeGroup,
    textAlignGroup,
    listGroup,
    fileGroup,
    moreOptionsGroup,
  ])

  return (
    <div className="flex flex-row items-center justify-between gap-2 border-0 border-b-[1px] border-solid border-f1-border py-3">
      <div className="flex flex-row items-center overflow-x-auto pl-4">
        {intersperse(groups, <ToolbarDivider />)}
      </div>
      <div className="flex flex-row items-center gap-2 pr-4">
        {canUseAi && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingAi={isLoadingAi}
            enhancementOptions={enhancementOptions}
            canUseCustomPrompt={canUseCustomPrompt}
            disableButtons={disableButtons}
          />
        )}
        {fullScreen && !isFullscreen && (
          <Button
            onClick={handleToggleFullscreen}
            label="Fullscreen"
            variant="ghost"
            type="button"
            disabled={disableButtons}
          />
        )}
      </div>
    </div>
  )
}

export { ToolbarDivider, ToolbarPlugin }
