import CharacterCount from "@tiptap/extension-character-count"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TaskList from "@tiptap/extension-task-list"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Typography from "@tiptap/extension-typography"
import Underline from "@tiptap/extension-underline"
import StarterKit from "@tiptap/starter-kit"
import { all, createLowlight } from "lowlight"
import { MentionedUser, mentionsConfig } from "../types"
import { Accessibility } from "./Accessibility"
import { CustomTask } from "./CustomTask"
import { configureMention } from "./Mention"
import { PersistSelection } from "./PersistSelection"
import { SlashCommand } from "./SlashCommand"

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
    StarterKit.configure({
      heading: { levels: [1, 2, 3] },
      bulletList: {
        HTMLAttributes: {
          class: "f1-bullet-list",
        },
      },
      orderedList: {
        HTMLAttributes: {
          class: "f1-ordered-list",
        },
      },
    }),
    CodeBlockLowlight.configure({
      lowlight: createLowlight(all),
    }),
    Underline,
    TextStyle,
    Color,
    Typography,
    Highlight,
    TaskList.configure({
      HTMLAttributes: {
        class: "f1-task-list",
      },
    }),
    CustomTask.configure({
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
    Table.configure({
      resizable: true,
      HTMLAttributes: {
        class: "f1-table",
      },
    }),
    TableRow.configure({
      HTMLAttributes: {
        class: "f1-table-row",
      },
    }),
    TableHeader.configure({
      HTMLAttributes: {
        class: "f1-table-header",
      },
    }),
    TableCell.configure({
      HTMLAttributes: {
        class: "f1-table-cell",
      },
    }),
    Placeholder.configure({
      placeholder: ({ node: _node, pos, hasAnchor: _hasAnchor, editor }) => {
        // Get the current node type and parent context
        const { state } = editor
        const $pos = state.doc.resolve(pos)

        // Check if we're in a list item
        if ($pos.parent.type.name === "listItem") {
          // Check what type of list we're in
          const grandParent = $pos.node(-1)

          if (grandParent?.type.name === "bulletList") {
            return "List item..."
          } else if (grandParent?.type.name === "orderedList") {
            return "Numbered list..."
          }

          return "List item..."
        }

        // Check if we're in a heading
        if ($pos.parent.type.name === "heading") {
          const level = $pos.parent.attrs.level
          return `Heading ${level}...`
        }

        // Check if we're in a table cell
        if ($pos.parent.type.name === "tableCell") {
          return "Table cell..."
        }

        // Check if we're in a table header
        if ($pos.parent.type.name === "tableHeader") {
          return "Table header..."
        }

        // Check if we're in a code block
        if ($pos.parent.type.name === "codeBlock") {
          return "Code..."
        }

        // Check if we're in a blockquote
        if ($pos.parent.type.name === "blockquote") {
          return "Quote..."
        }

        // Default placeholder
        return placeholder || "Type something..."
      },
      includeChildren: true,
    }),
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
    SlashCommand,
  ]
}

export { ExtensionsConfiguration }
