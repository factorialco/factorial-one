import { Button } from "@/components/Actions/Button"
import { toolbarLabels } from "@/experimental/exports"
import { IconType } from "@/factorial-one"
import {
  AlignTextCenter,
  AlignTextJustify,
  AlignTextLeft,
  AlignTextRight,
  Bold,
  CheckDouble,
  Code,
  Cross,
  Ellipsis,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  Minus,
  OlList,
  Pencil,
  Quote,
  Strikethrough,
  Underline,
} from "@/icons/app"
import { cn } from "@/lib/utils"
import { Editor } from "@tiptap/react"
import { compact } from "lodash"
import React from "react"
import { getTextAlignIcon, getTextAlignLabel } from "../utils/helpers"
import { ToolbarButton } from "./ToolbarButton"
import { ToolbarDropdown } from "./ToolbarDropdown"

interface ToolbarDividerProps {
  hidden?: boolean
  mode?: "light" | "dark"
}

const ToolbarDivider = ({
  hidden = false,
  mode = "light",
}: ToolbarDividerProps) => (
  <div
    className={cn(
      "mx-1 h-4 w-[1px] flex-shrink-0",
      hidden && "hidden",
      mode === "dark"
        ? "bg-f1-foreground-inverse opacity-50"
        : "bg-f1-foreground-disabled"
    )}
  />
)

const intersperse = (arr: React.ReactNode[], sep: React.ReactNode) =>
  arr.map((item, index) => (
    <React.Fragment key={`intersperse-${index}`}>
      {item}
      {index < arr.length - 1 && sep}
    </React.Fragment>
  ))

interface ToolbarProps {
  editor: Editor
  isFullscreen: boolean
  disableButtons: boolean
  onClose?: () => void
  animationComplete: boolean
  labels: toolbarLabels
  mode?: "light" | "dark"
}

interface ButtonConfig {
  key: string
  icon: IconType
  active: (editor: Editor) => boolean
  onClick: (editor: Editor) => void
  tooltip: {
    label: string
    shortcut: string[]
  }
}

const Toolbar = ({
  editor,
  isFullscreen,
  disableButtons,
  onClose,
  animationComplete,
  labels,
  mode = "light",
}: ToolbarProps) => {
  // Format buttons configuration
  const formatButtons: ButtonConfig[] = [
    {
      key: "bold",
      icon: Bold,
      active: (editor) => editor.isActive("bold"),
      onClick: (editor) => editor.chain().focus().toggleBold().run(),
      tooltip: {
        label: `**${labels.bold}**`,
        shortcut: ["cmd", "b"],
      },
    },
    {
      key: "italic",
      icon: Italic,
      active: (editor) => editor.isActive("italic"),
      onClick: (editor) => editor.chain().focus().toggleItalic().run(),
      tooltip: {
        label: `*${labels.italic}*`,
        shortcut: ["cmd", "i"],
      },
    },
    {
      key: "underline",
      icon: Underline,
      active: (editor) => editor.isActive("underline"),
      onClick: (editor) => editor.chain().focus().toggleUnderline().run(),
      tooltip: {
        label: `_${labels.underline}_`,
        shortcut: ["cmd", "u"],
      },
    },
    {
      key: "strike",
      icon: Strikethrough,
      active: (editor) => editor.isActive("strike"),
      onClick: (editor) => editor.chain().focus().toggleStrike().run(),
      tooltip: {
        label: `~${labels.strike}~`,
        shortcut: ["cmd", "shift", "s"],
      },
    },
  ]

  // Heading buttons configuration
  const headingButtons: ButtonConfig[] = [
    {
      key: "heading1",
      icon: Heading1,
      active: (editor) => editor.isActive("heading", { level: 1 }),
      onClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 1 }).run(),
      tooltip: {
        label: `# ${labels.heading1}`,
        shortcut: ["cmd", "1"],
      },
    },
    {
      key: "heading2",
      icon: Heading2,
      active: (editor) => editor.isActive("heading", { level: 2 }),
      onClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 2 }).run(),
      tooltip: {
        label: `## ${labels.heading2}`,
        shortcut: ["cmd", "2"],
      },
    },
    {
      key: "heading3",
      icon: Heading3,
      active: (editor) => editor.isActive("heading", { level: 3 }),
      onClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 3 }).run(),
      tooltip: {
        label: `### ${labels.heading3}`,
        shortcut: ["cmd", "3"],
      },
    },
  ]

  // List buttons configuration
  const listButtons: ButtonConfig[] = [
    {
      key: "bulletList",
      icon: List,
      active: (editor) => editor.isActive("bulletList"),
      onClick: (editor) => editor.chain().focus().toggleBulletList().run(),
      tooltip: {
        label: `- ${labels.bulletList}`,
        shortcut: ["cmd", "alt", "8"],
      },
    },
    {
      key: "orderedList",
      icon: OlList,
      active: (editor) => editor.isActive("orderedList"),
      onClick: (editor) => editor.chain().focus().toggleOrderedList().run(),
      tooltip: {
        label: `1. ${labels.orderedList}`,
        shortcut: ["cmd", "alt", "7"],
      },
    },
    {
      key: "taskList",
      icon: CheckDouble,
      active: (editor) => editor.isActive("taskList"),
      onClick: (editor) => editor.chain().focus().toggleTaskList().run(),
      tooltip: {
        label: `[ ] ${labels.taskList}`,
        shortcut: ["cmd", "alt", "t"],
      },
    },
    {
      key: "highlight",
      icon: Pencil,
      active: (editor) => editor.isActive("highlight"),
      onClick: (editor) => editor.chain().focus().toggleHighlight().run(),
      tooltip: {
        label: `==${labels.highlight}==`,
        shortcut: ["cmd", "alt", "h"],
      },
    },
  ]

  // Render buttons from configuration
  const renderButtons = (configs: ButtonConfig[]) => (
    <div className="flex flex-row items-center gap-0.5">
      {configs.map((config) => (
        <ToolbarButton
          key={config.key}
          active={config.active(editor)}
          label={labels[config.key as keyof typeof labels]}
          icon={config.icon}
          disabled={disableButtons}
          onClick={() => config.onClick(editor)}
          tooltip={config.tooltip}
          mode={mode}
        />
      ))}
    </div>
  )

  const formattingGroup = renderButtons(formatButtons)
  const textSizeGroup = renderButtons(headingButtons)

  const moreOptionsGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarDropdown
        mode={mode}
        items={[
          {
            label: labels.left,
            icon: AlignTextLeft,
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            isActive:
              editor.isActive({ textAlign: "left" }) ||
              (!editor.isActive({ textAlign: "justify" }) &&
                !editor.isActive({ textAlign: "center" }) &&
                !editor.isActive({ textAlign: "right" })),
          },
          {
            label: labels.center,
            icon: AlignTextCenter,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            isActive: editor.isActive({ textAlign: "center" }),
          },
          {
            label: labels.right,
            icon: AlignTextRight,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            isActive: editor.isActive({ textAlign: "right" }),
          },
          {
            label: labels.justify,
            icon: AlignTextJustify,
            onClick: () => editor.chain().focus().setTextAlign("justify").run(),
            isActive: editor.isActive({ textAlign: "justify" }),
          },
        ]}
        disabled={disableButtons}
        activator={{
          label: getTextAlignLabel(editor),
          icon: getTextAlignIcon(editor),
        }}
      />
      <ToolbarDivider hidden={!isFullscreen} mode={mode} />

      {renderButtons(listButtons)}

      <ToolbarDropdown
        mode={mode}
        items={[
          {
            icon: Code,
            label: labels.codeBlock,
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: editor.isActive("codeBlock"),
            tooltip: {
              label: `\`\`\`${labels.codeBlock}\`\`\``,
              shortcut: ["cmd", "alt", "k"],
            },
          },
          {
            icon: Minus,
            label: labels.divider,
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            isActive: editor.isActive("horizontalRule"),
            tooltip: {
              label: `--- ${labels.divider} ---`,
              shortcut: ["cmd", "alt", "d"],
            },
          },
          {
            icon: Quote,
            label: labels.quote,
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: editor.isActive("blockquote"),
            tooltip: {
              label: `> ${labels.quote}`,
              shortcut: ["cmd", "alt", "q"],
            },
          },
        ]}
        disabled={disableButtons}
        activator={{
          label: labels.moreOptions,
          icon: Ellipsis,
        }}
      />
    </div>
  )

  const groups = compact([formattingGroup, textSizeGroup, moreOptionsGroup])

  return (
    <div className={cn("flex flex-row items-start gap-2 overflow-hidden")}>
      {onClose && (
        <Button
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
          variant="neutral"
          size="md"
          disabled={disableButtons}
          type="button"
          hideLabel
          round
          label={labels.close}
          icon={Cross}
        />
      )}
      <div
        className={cn(
          "flex grow flex-row items-center",
          animationComplete
            ? "overflow-x-auto [scrollbar-width:thin]"
            : "overflow-hidden"
        )}
      >
        {intersperse(groups, <ToolbarDivider mode={mode} />)}
      </div>
    </div>
  )
}

export { Toolbar, ToolbarButton, ToolbarDivider }
