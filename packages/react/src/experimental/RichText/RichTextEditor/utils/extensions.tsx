import CharacterCount from "@tiptap/extension-character-count"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import { Extension, ReactNodeViewRenderer } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Plugin, PluginKey } from "prosemirror-state"
import { Decoration, DecorationSet } from "prosemirror-view"
import { configureMention } from "./mention"
import { MentionedUser, mentionsConfig } from "./types"

const persistSelectionKey = new PluginKey("persistSelection")

const persistSelectionPlugin = new Plugin({
  key: persistSelectionKey,
  state: {
    init(_, { doc, selection }) {
      return selection.from !== selection.to
        ? DecorationSet.create(doc, [
            Decoration.inline(selection.from, selection.to, {
              class: "preserved-selection",
            }),
          ])
        : DecorationSet.empty
    },
    apply(newState) {
      const { doc, selection } = newState
      return selection.from !== selection.to
        ? DecorationSet.create(doc, [
            Decoration.inline(selection.from, selection.to, {
              class: "preserved-selection",
            }),
          ])
        : DecorationSet.empty
    },
  },
  props: {
    decorations(state) {
      return this.getState(state)
    },
  },
})

const PersistSelection = Extension.create({
  name: "persistSelection",
  addProseMirrorPlugins() {
    return [persistSelectionPlugin]
  },
})

const Accessibility = Extension.create({
  name: "accessibility",
  addOptions() {
    return {
      label: "Rich text editor",
    }
  },
  onTransaction() {
    this.editor.view.dom.setAttribute("aria-label", this.options.label)
  },

  onCreate() {
    this.editor.view.dom.setAttribute("aria-label", this.options.label)
  },
})

import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { cn } from "@/lib/utils"
import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react"
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

const CustomTaskItem = TaskItem.extend({
  addNodeView() {
    return ReactNodeViewRenderer(CustomTaskItemView)
  },
})

interface ExtensionsConfigurationProps {
  mentionsConfig?: mentionsConfig
  mentionSuggestions: MentionedUser[]
  setMentionSuggestions: (suggestions: MentionedUser[]) => void
  placeholder: string
  maxCharacters?: number
}

const ExtensionsConfiguration = ({
  mentionsConfig,
  mentionSuggestions,
  setMentionSuggestions,
  placeholder,
  maxCharacters,
}: ExtensionsConfigurationProps) => {
  return [
    StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
    Underline,
    TextStyle,
    Color,
    Image,
    Typography,
    Highlight,
    TaskList.configure({
      HTMLAttributes: {
        class: "f1-task-list",
      },
    }),
    CustomTaskItem.configure({
      nested: true,
      HTMLAttributes: {
        class: "f1-task-item",
      },
    }),
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        rel: "noopener noreferrer",
        target: "_blank",
      },
    }),
    Placeholder.configure({ placeholder }),
    CharacterCount.configure({ limit: maxCharacters }),
    ...(mentionsConfig
      ? configureMention(
          mentionSuggestions,
          setMentionSuggestions,
          mentionsConfig.onMentionQueryStringChanged,
          mentionsConfig.users
        )
      : []),
    PersistSelection,
    Accessibility.configure({ label: placeholder || "Rich text editor" }),
  ]
}

export { ExtensionsConfiguration }
