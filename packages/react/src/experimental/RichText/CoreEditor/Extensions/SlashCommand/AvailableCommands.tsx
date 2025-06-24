import { IconType } from "@/factorial-one"
import {
  Ai,
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

interface AIBlockConfig {
  buttons: { type: string; emoji: string; label: string }[]
  onClick: (type: string) => Promise<any>
  title: string
}

const availableCommands = (
  labels: ToolbarLabels,
  aiBlockConfig?: AIBlockConfig
): CommandItem[] => {
  // Get grouped commands and flatten them for backward compatibility
  const defaultGroupLabels: SlashCommandGroupLabels = {
    textStyles: "Text Styles",
    lists: "Lists",
    blocks: "Blocks",
  }
  const groups = getGroupedCommands(labels, defaultGroupLabels, aiBlockConfig)
  return groups.flatMap((group) => group.commands)
}

const getGroupedCommands = (
  labels: ToolbarLabels,
  groupLabels: SlashCommandGroupLabels,
  aiBlockConfig?: AIBlockConfig
): CommandGroup[] => [
  {
    title: aiBlockConfig?.title || "AI Block",
    commands: [
      ...(aiBlockConfig
        ? [
            {
              title: aiBlockConfig.title,
              command: (editor: Editor) => {
                const { from, to } = editor.state.selection

                // Insert AIBlock first
                editor
                  .chain()
                  .focus()
                  .deleteRange({ from, to })
                  .insertAIBlock({
                    config: aiBlockConfig,
                    content: null,
                    isLoading: false,
                  })
                  .run()

                // Then insert a paragraph after the AIBlock
                setTimeout(() => {
                  const { tr } = editor.state
                  const pos = tr.selection.from
                  editor
                    .chain()
                    .focus()
                    .insertContentAt(pos, {
                      type: "paragraph",
                      content: [],
                    })
                    .setTextSelection(pos + 1)
                    .run()
                }, 0)
              },
              icon: Ai,
            },
          ]
        : []),
    ],
  },
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
export type {
  AIBlockConfig,
  CommandGroup,
  CommandItem,
  SlashCommandGroupLabels,
}
