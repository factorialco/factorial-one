import { Button } from "@/components/Actions/Button"
import { ChevronUp, Code, Ellipsis, Minus } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Editor } from "@tiptap/react"
import { compact, defaultsDeep } from "lodash"
import React from "react"
import { EnhanceActivator } from "../Enhance"
import {
  defaultAllToolbarConfig,
  defaultNoneToolbarConfig,
  getHeadingLabel,
  getTextAlignLabel,
} from "../utils/helpers"
import { enhanceConfig, toolbarConfig } from "../utils/types"
import { ToolbarDropdown } from "./ToolbarDropdown"

const ToolbarDivider = ({ show = true }: { show?: boolean }) => (
  <div
    className={cn(
      "mx-1 h-4 w-0.5 bg-f1-background-secondary-hover",
      show ? "block" : "hidden"
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
  editor: Editor | null
  handleToggleFullscreen: () => void
  isFullscreen: boolean
  onEnhanceWithAI?: (
    selectedText: string,
    selectedIntent?: string,
    customIntent?: string,
    context?: string
  ) => Promise<void>
  isLoadingEnhance: boolean
  config: toolbarConfig
  disableButtons: boolean
  enhanceConfig: enhanceConfig | undefined
}

const Toolbar = ({
  editor,
  handleToggleFullscreen,
  isFullscreen,
  onEnhanceWithAI,
  isLoadingEnhance,
  enhanceConfig,
  config,
  disableButtons,
}: ToolbarProps) => {
  if (!editor) return null

  const mergedConfig =
    config === "all"
      ? defaultAllToolbarConfig
      : config === "none"
        ? defaultNoneToolbarConfig
        : defaultsDeep({}, config, defaultAllToolbarConfig)

  const {
    format: { bold, italic, underline, highlight, strike },
    textSize: { heading1, heading2, heading3 },
    textAlign: { left, center, right, justify },
    list: { bullet, ordered, task },
    moreOptions: { code, horizontalRule, quote },
    fullScreen,
  } = mergedConfig

  const formattingGroup =
    bold || italic || underline ? (
      <div className="flex flex-row items-center gap-2">
        {bold && (
          <Button
            variant={editor.isActive("bold") ? "neutral" : "ghost"}
            label="B"
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
            label="I"
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
            label="U"
            onClick={() => {
              editor.chain().focus().toggleUnderline().run()
            }}
            type="button"
            disabled={disableButtons}
          />
        )}
        {strike && (
          <Button
            variant={editor.isActive("strike") ? "neutral" : "ghost"}
            label="S"
            onClick={() => {
              editor.chain().focus().toggleStrike().run()
            }}
            type="button"
            disabled={disableButtons}
          />
        )}
        {highlight && (
          <Button
            variant={editor.isActive("highlight") ? "neutral" : "ghost"}
            label="H"
            onClick={() => {
              editor.chain().focus().toggleHighlight().run()
            }}
            type="button"
            disabled={disableButtons}
          />
        )}
      </div>
    ) : null

  const textSizeGroup =
    heading1 || heading2 || heading3 ? (
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={compact([
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
          label={getHeadingLabel(editor)}
          disabled={disableButtons}
          type="button"
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
          label={getTextAlignLabel(editor)}
          disabled={disableButtons}
          type="button"
        />
      </ToolbarDropdown>
    ) : null

  const listGroup =
    bullet || ordered || task ? (
      <div className="flex flex-row items-center gap-2">
        {bullet && (
          <Button
            onClick={() => {
              editor.chain().focus().toggleBulletList().run()
            }}
            variant={editor.isActive("bulletList") ? "neutral" : "ghost"}
            label="Bullet"
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
            label="Ordered"
            type="button"
            disabled={disableButtons}
          />
        )}
        {task && (
          <Button
            onClick={() => {
              editor.chain().focus().toggleTaskList().run()
            }}
            variant={editor.isActive("taskList") ? "neutral" : "ghost"}
            label="Task"
            type="button"
            disabled={disableButtons}
          />
        )}
      </div>
    ) : null

  const moreOptionsGroup =
    code || horizontalRule || quote ? (
      <ToolbarDropdown
        isFullscreen={isFullscreen}
        items={compact([
          code && {
            icon: Code,
            label: "Code Block",
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: editor.isActive("codeBlock"),
          },
          horizontalRule && {
            icon: Minus,
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
          type="button"
        />
      </ToolbarDropdown>
    ) : null

  const groups = compact([
    formattingGroup,
    textSizeGroup,
    textAlignGroup,
    listGroup,
    moreOptionsGroup,
  ])

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="flex flex-row items-center overflow-x-auto whitespace-nowrap pl-4">
        {intersperse(groups, <ToolbarDivider />)}
      </div>
      <div className="flex flex-row items-center gap-2 pr-4">
        {enhanceConfig && (
          <EnhanceActivator
            editor={editor}
            onEnhanceWithAI={onEnhanceWithAI}
            isLoadingEnhance={isLoadingEnhance}
            enhanceConfig={enhanceConfig}
            disableButtons={disableButtons}
          />
        )}
        {fullScreen && !isFullscreen && (
          <Button
            onClick={handleToggleFullscreen}
            label="Fullscreen"
            variant="ghost"
            type="button"
            hideLabel
            round
            icon={ChevronUp}
            disabled={disableButtons}
          />
        )}
      </div>
    </div>
  )
}

export { Toolbar, ToolbarDivider }
