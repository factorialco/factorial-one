import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"
import TaskItem from "@tiptap/extension-task-item"
import {
  NodeViewContent,
  NodeViewProps,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react"
import React from "react"

export const CustomTaskItemView: React.FC<NodeViewProps> = ({
  node,
  getPos,
  editor,
}) => {
  const isChecked = node.attrs.checked

  const handleCheckedChange = (checked: boolean) => {
    editor
      .chain()
      .focus()
      .command(({ tr }) => {
        tr.setNodeMarkup(getPos(), undefined, {
          ...node.attrs,
          checked,
        })
        return true
      })
      .run()
  }

  return (
    <NodeViewWrapper className="mb-2 flex items-start gap-2">
      <Checkbox
        checked={isChecked}
        onCheckedChange={handleCheckedChange}
        hideLabel
      />
      <div
        className={cn(isChecked && "text-f1-foreground-secondary line-through")}
      >
        <NodeViewContent className="content" />
      </div>
    </NodeViewWrapper>
  )
}

const CustomTask = TaskItem.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CustomTaskItemView)
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "li",
      { class: cn("f1-task-item", HTMLAttributes.class) },
      [
        "div",
        { class: "flex items-start gap-2" },
        [
          "button",
          {
            type: "button",
            role: "checkbox",
            "aria-checked": node.attrs.checked ? "true" : "false",
            disabled: "disabled",
            class: node.attrs.checked
              ? "custom-checkbox custom-checkbox-checked"
              : "custom-checkbox",
            style: "appearance: none; -webkit-appearance: none;",
          },
        ],
        [
          "div",
          {
            class: cn(
              node.attrs.checked
                ? "text-f1-foreground-secondary line-through"
                : "",
              "content"
            ),
          },
          0,
        ],
      ],
    ]
  },
})

export { CustomTask }
