import { Button } from "@/components/Actions/Button"
import { IconType } from "@/factorial-one"
import { Check, Code, Cross, Ellipsis, List, Minus, Pencil } from "@/icons/app"
import { Editor } from "@tiptap/react"
import { compact } from "lodash"
import React from "react"
import { getTextAlignLabel } from "../utils/helpers"
import { ToolbarDropdown } from "./ToolbarDropdown"

const ToolbarDivider = () => (
  <div className={"mx-1 h-4 w-[1px] bg-f1-foreground-disabled"} />
)

interface ToolbarButtonProps {
  onClick: () => void
  active: boolean
  label: string
  disabled: boolean
  icon?: IconType
}

const ToolbarButton = ({
  onClick,
  active,
  label,
  disabled,
  icon,
}: ToolbarButtonProps) => {
  return (
    <Button
      variant={active ? "neutral" : "ghost"}
      label={label}
      size="md"
      round
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      type="button"
      disabled={disabled}
      hideLabel={icon ? true : false}
      icon={icon ?? undefined}
    />
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
}

const Toolbar = ({
  editor,
  isFullscreen,
  disableButtons,
  onClose,
}: ToolbarProps) => {
  const formattingGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarButton
        active={editor.isActive("bold")}
        label="B"
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />

      <ToolbarButton
        active={editor.isActive("italic")}
        label="I"
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <ToolbarButton
        active={editor.isActive("underline")}
        label="U"
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
      <ToolbarButton
        active={editor.isActive("strike")}
        label="S"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={disableButtons}
      />
    </div>
  )

  const textSizeGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarButton
        active={editor.isActive("heading", { level: 1 })}
        label="H1"
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      />

      <ToolbarButton
        active={editor.isActive("heading", { level: 2 })}
        label="H2"
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      <ToolbarButton
        active={editor.isActive("heading", { level: 3 })}
        label="H3"
        disabled={disableButtons}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      />
    </div>
  )

  const moreOptionsGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={[
          {
            label: "Left",
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            isActive:
              editor.isActive({ textAlign: "left" }) ||
              (!editor.isActive({ textAlign: "justify" }) &&
                !editor.isActive({ textAlign: "center" }) &&
                !editor.isActive({ textAlign: "right" })),
          },
          {
            label: "Center",
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            isActive: editor.isActive({ textAlign: "center" }),
          },
          {
            label: "Right",
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            isActive: editor.isActive({ textAlign: "right" }),
          },
          {
            label: "Justify",
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
          disabled={disableButtons}
          type="button"
        />
      </ToolbarDropdown>
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        active={editor.isActive("bulletList")}
        label="Bullet"
        disabled={disableButtons}
        icon={List}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        active={editor.isActive("orderedList")}
        label="Ordered"
        disabled={disableButtons}
        icon={List}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        active={editor.isActive("taskList")}
        label="Task List"
        disabled={disableButtons}
        icon={Check}
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        active={editor.isActive("highlight")}
        label="Highlight"
        disabled={disableButtons}
        icon={Pencil}
      />
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={[
          {
            icon: Code,
            label: "Code Block",
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: editor.isActive("codeBlock"),
          },
          {
            icon: Minus,
            label: "Horizontal Rule",
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            isActive: editor.isActive("horizontalRule"),
          },
          {
            label: "Quote",
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: editor.isActive("blockquote"),
          },
        ]}
        disabled={disableButtons}
      >
        <Button
          onClick={(e) => e.preventDefault()}
          variant="ghost"
          size="md"
          icon={Ellipsis}
          hideLabel
          label="More options"
          disabled={disableButtons}
          type="button"
        />
      </ToolbarDropdown>
    </div>
  )

  const groups = compact([formattingGroup, textSizeGroup, moreOptionsGroup])

  return (
    <div className="flex flex-row items-center gap-2">
      <Button
        // @ts-ignore
        className="flex-shrink-0"
        onClick={(e) => {
          e.preventDefault()
          onClose()
        }}
        variant="neutral"
        size="md"
        label="Close"
        disabled={disableButtons}
        type="button"
        hideLabel
        round
        icon={Cross}
      />
      <div className="flex grow flex-row items-center overflow-x-auto [scrollbar-width:none]">
        {intersperse(groups, <ToolbarDivider />)}
      </div>
    </div>
  )
}

export { Toolbar, ToolbarDivider }
