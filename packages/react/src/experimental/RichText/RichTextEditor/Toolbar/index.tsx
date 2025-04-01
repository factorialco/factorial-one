import { Button } from "@/components/Actions/Button"
import { toolbarLabels } from "@/experimental/exports"
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

const Toolbar = ({
  editor,
  isFullscreen,
  disableButtons,
  onClose,
  animationComplete,
  labels,
  mode = "light",
}: ToolbarProps) => {
  const formattingGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarButton
        active={editor.isActive("bold")}
        label={labels.bold}
        icon={Bold}
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleBold().run()}
        tooltip={{
          label: `**${labels.bold}**`,
          shortcut: ["cmd", "b"],
        }}
        mode={mode}
      />

      <ToolbarButton
        active={editor.isActive("italic")}
        label={labels.italic}
        icon={Italic}
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        tooltip={{
          label: `*${labels.italic}*`,
          shortcut: ["cmd", "i"],
        }}
        mode={mode}
      />
      <ToolbarButton
        active={editor.isActive("underline")}
        label={labels.underline}
        icon={Underline}
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        tooltip={{
          label: `_${labels.underline}_`,
          shortcut: ["cmd", "u"],
        }}
        mode={mode}
      />
      <ToolbarButton
        active={editor.isActive("strike")}
        label={labels.strike}
        icon={Strikethrough}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={disableButtons}
        tooltip={{
          label: `~${labels.strike}~`,
          shortcut: ["cmd", "shift", "s"],
        }}
        mode={mode}
      />
    </div>
  )

  const textSizeGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarButton
        active={editor.isActive("heading", { level: 1 })}
        label={labels.heading1}
        icon={Heading1}
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        tooltip={{
          label: `# ${labels.heading1}`,
          shortcut: ["cmd", "1"],
        }}
        mode={mode}
      />

      <ToolbarButton
        active={editor.isActive("heading", { level: 2 })}
        label={labels.heading2}
        icon={Heading2}
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        tooltip={{
          label: `## ${labels.heading2}`,
          shortcut: ["cmd", "2"],
        }}
        mode={mode}
      />
      <ToolbarButton
        active={editor.isActive("heading", { level: 3 })}
        label={labels.heading3}
        icon={Heading3}
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        tooltip={{
          label: `### ${labels.heading3}`,
          shortcut: ["cmd", "3"],
        }}
        mode={mode}
      />
    </div>
  )

  const moreOptionsGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarDropdown
        mode={mode}
        isFullscreen={isFullscreen}
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
      >
        <Button
          onClick={(e) => e.preventDefault()}
          variant="ghost"
          size="md"
          label={getTextAlignLabel(editor)}
          icon={getTextAlignIcon(editor)}
          disabled={disableButtons}
          hideLabel
          round
          type="button"
        />
      </ToolbarDropdown>
      <ToolbarDivider hidden={!isFullscreen} mode={mode} />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        label={labels.bulletList}
        disabled={disableButtons}
        icon={List}
        tooltip={{
          label: `- ${labels.bulletList}`,
          shortcut: ["cmd", "alt", "8"],
        }}
        mode={mode}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        label={labels.orderedList}
        disabled={disableButtons}
        icon={OlList}
        tooltip={{
          label: `1. ${labels.orderedList}`,
          shortcut: ["cmd", "alt", "7"],
        }}
        mode={mode}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        active={editor.isActive("taskList")}
        label={labels.taskList}
        disabled={disableButtons}
        icon={CheckDouble}
        tooltip={{
          label: `[ ] ${labels.taskList}`,
          shortcut: ["cmd", "alt", "t"],
        }}
        mode={mode}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        active={editor.isActive("highlight")}
        label={labels.highlight}
        disabled={disableButtons}
        icon={Pencil}
        tooltip={{
          label: `==${labels.highlight}==`,
          shortcut: ["cmd", "alt", "h"],
        }}
        mode={mode}
      />
      <ToolbarDropdown
        mode={mode}
        isFullscreen={isFullscreen}
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
      >
        <Button
          variant="ghost"
          size="md"
          icon={Ellipsis}
          disabled={disableButtons}
          type="button"
          hideLabel
          round
          label={labels.moreOptions}
        />
      </ToolbarDropdown>
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
