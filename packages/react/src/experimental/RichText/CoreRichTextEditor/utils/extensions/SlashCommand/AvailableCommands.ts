import { IconType } from "@/factorial-one"
import {
  CheckDouble,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  Minus,
  OlList,
  Quote,
  Table,
} from "@/icons/app"
import { Editor } from "@tiptap/react"

interface CommandItem {
  title: string
  icon: IconType
  command: (editor: Editor) => void
  markdownShortcut?: string
}

const availableCommands: CommandItem[] = [
  // Headings
  {
    title: "Heading 1",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleHeading({ level: 1 })
        .run()
    },
    icon: Heading1,
    markdownShortcut: "#",
  },
  {
    title: "Heading 2",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleHeading({ level: 2 })
        .run()
    },
    icon: Heading2,
    markdownShortcut: "##",
  },
  {
    title: "Heading 3",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleHeading({ level: 3 })
        .run()
    },
    icon: Heading3,
    markdownShortcut: "###",
  },

  // Lists
  {
    title: "Bullet List",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleBulletList()
        .run()
    },
    icon: List,
    markdownShortcut: "-",
  },
  {
    title: "Ordered List",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleOrderedList()
        .run()
    },
    icon: OlList,
    markdownShortcut: "1.",
  },
  {
    title: "Task List",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleTaskList()
        .run()
    },
    icon: CheckDouble,
    markdownShortcut: "[ ]",
  },

  // Blocks
  {
    title: "Code Block",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleCodeBlock()
        .run()
    },
    icon: Code,
    markdownShortcut: "```",
  },
  {
    title: "Quote",
    command: (editor) => {
      const { from, to } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to })
        .toggleBlockquote()
        .run()
    },
    icon: Quote,
    markdownShortcut: ">",
  },
  {
    title: "Divider",
    command: (editor) => {
      const { from } = editor.state.selection
      editor
        .chain()
        .focus()
        .setTextSelection({ from, to: from })
        .setHorizontalRule()
        .run()
    },
    icon: Minus,
    markdownShortcut: "---",
  },

  // Tables
  {
    title: "Table",
    command: (editor) => {
      editor
        .chain()
        .focus()
        .insertTable({ rows: 2, cols: 2, withHeaderRow: false })
        .run()
    },
    icon: Table,
    markdownShortcut: "|",
  },
]

export { availableCommands }
export type { CommandItem }
