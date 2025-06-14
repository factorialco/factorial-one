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
} from "@/icons/app"
import { Editor } from "@tiptap/react"
import { ToolbarLabels } from "../../Toolbar/types"

interface CommandItem {
  title: string
  icon: IconType
  command: (editor: Editor) => void
}

interface CommandGroup {
  title: string
  commands: CommandItem[]
}

interface SlashCommandGroupLabels {
  textStyles: string
  lists: string
  blocks: string
  [key: string]: string
}

const availableCommands = (labels: ToolbarLabels): CommandItem[] => {
  // Get grouped commands and flatten them for backward compatibility
  const defaultGroupLabels: SlashCommandGroupLabels = {
    textStyles: "Text Styles",
    lists: "Lists",
    blocks: "Blocks",
  }
  const groups = getGroupedCommands(labels, defaultGroupLabels)
  return groups.flatMap((group) => group.commands)
}

const getGroupedCommands = (
  labels: ToolbarLabels,
  groupLabels: SlashCommandGroupLabels
): CommandGroup[] => [
  {
    title: groupLabels.textStyles,
    commands: [
      {
        title: labels.heading1,
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
      },
      {
        title: labels.heading2,
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
      },
      {
        title: labels.heading3,
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
      },
    ],
  },
  {
    title: groupLabels.lists,
    commands: [
      {
        title: labels.bulletList,
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
      },
      {
        title: labels.orderedList,
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
      },
      {
        title: labels.taskList,
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
      },
    ],
  },
  {
    title: groupLabels.blocks,
    commands: [
      {
        title: labels.codeBlock,
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
      },
      {
        title: labels.quote,
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
      },
      {
        title: labels.divider,
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
      },
    ],
  },
]

export { availableCommands, getGroupedCommands }
export type { CommandGroup, CommandItem, SlashCommandGroupLabels }
