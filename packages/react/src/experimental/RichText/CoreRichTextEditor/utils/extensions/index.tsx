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
      includeChildren: true,
      placeholder: placeholder,
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
