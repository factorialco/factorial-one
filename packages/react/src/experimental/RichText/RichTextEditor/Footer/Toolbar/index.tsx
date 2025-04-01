import { Button } from "@/components/Actions/Button"
import { toolbarLabels } from "@/experimental/exports"
import { Shortcut } from "@/experimental/Information/Shortcut"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { Icon, IconType } from "@/factorial-one"
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
import { Button as ButtonUI } from "@/ui/button"
import { Editor } from "@tiptap/react"
import { compact } from "lodash"
import React, { ComponentProps } from "react"
import { getTextAlignIcon, getTextAlignLabel } from "../../utils/helpers"
import { ToolbarDropdown } from "./ToolbarDropdown"

const ToolbarDivider = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    className={cn(
      "mx-1 h-4 w-[1px] flex-shrink-0 bg-f1-foreground-disabled",
      hidden && "hidden"
    )}
  />
)

interface ToolbarButtonProps {
  onClick?: () => void
  active?: boolean
  label: string
  disabled: boolean
  icon?: IconType
  tooltip?: {
    description?: string
    label?: string
    shortcut?: ComponentProps<typeof Shortcut>["keys"]
  }
}

const ToolbarButton = ({
  onClick = () => {},
  active = false,
  label,
  disabled,
  icon,
  tooltip,
  ...props
}: ToolbarButtonProps) => {
  const button = (
    <ButtonUI
      {...props}
      variant="outline"
      size="md"
      onClick={onClick}
      className={cn(
        "flex aspect-square items-center p-0 transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100",
        active
          ? "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"
          : "border-none hover:bg-f1-background-secondary-hover"
      )}
      disabled={disabled}
      aria-label={label}
    >
      {icon ? (
        <Icon
          icon={icon}
          className={active ? "text-f1-icon-selected" : "text-f1-foreground"}
        />
      ) : (
        <p className={active ? "text-f1-icon-selected" : "text-f1-foreground"}>
          {label}
        </p>
      )}
    </ButtonUI>
  )

  return tooltip ? (
    <Tooltip
      description={tooltip?.description || ""}
      label={tooltip?.label}
      shortcut={tooltip?.shortcut}
    >
      {button}
    </Tooltip>
  ) : (
    button
  )
}

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
  onClose: () => void
  animationComplete: boolean
  labels: toolbarLabels
}

const Toolbar = ({
  editor,
  isFullscreen,
  disableButtons,
  onClose,
  animationComplete,
  labels,
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
      />
    </div>
  )

  const moreOptionsGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarDropdown
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
      <ToolbarDivider hidden={!isFullscreen} />
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
      />
      <ToolbarDropdown
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
    <div className="flex flex-row items-start gap-2 overflow-hidden">
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
      <div
        className={cn(
          "flex grow flex-row items-center",
          animationComplete
            ? "overflow-x-auto [scrollbar-width:thin]"
            : "overflow-hidden"
        )}
      >
        {intersperse(groups, <ToolbarDivider />)}
      </div>
    </div>
  )
}

export { Toolbar, ToolbarButton, ToolbarDivider }
