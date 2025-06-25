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
import { AIBlockConfig } from "../AIBlock"

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
                // Insert AI block and empty paragraph in one operation
                editor
                  .chain()
                  .focus()
                  .insertContent([
                    {
                      type: "aiBlock",
                      attrs: {
                        data: {
                          content: null,
                          selectedAction: undefined,
                        },
                        config: aiBlockConfig,
                      },
                    },
                    {
                      type: "paragraph",
                    },
                  ])
                  .run()

                // Position cursor in the paragraph after insertion
                setTimeout(() => {
                  const { state } = editor
                  const { doc } = state
                  let lastParagraphPos = null

                  // Find the last paragraph in the document (which should be the one we just inserted)
                  doc.descendants((node, pos) => {
                    if (node.type.name === "paragraph") {
                      lastParagraphPos = pos + 1 // Position inside the paragraph
                    }
                  })

                  // Position cursor in the last paragraph
                  if (lastParagraphPos !== null) {
                    editor
                      .chain()
                      .focus()
                      .setTextSelection(lastParagraphPos)
                      .run()
                  }
                }, 10)
              },
              icon: Ai,
            },
            // Add individual commands for each AI button
            ...aiBlockConfig.buttons.map((button) => ({
              title: button.label ?? "Generate",
              command: async (editor: Editor) => {
                // Insert AI block with the specific action already loading
                editor
                  .chain()
                  .focus()
                  .insertContent([
                    {
                      type: "aiBlock",
                      attrs: {
                        data: {
                          content: null,
                          selectedAction: button.type,
                        },
                        config: aiBlockConfig,
                      },
                    },
                    {
                      type: "paragraph",
                    },
                  ])
                  .run()

                // Execute the AI action with a small delay to ensure the component is mounted
                setTimeout(async () => {
                  try {
                    const content = await aiBlockConfig.onClick(button.type)

                    // Find the AIBlock we just inserted and update it with the result
                    setTimeout(() => {
                      const { state } = editor
                      const { doc } = state
                      let lastAIBlockPos = null

                      // Find the last AIBlock (which should be the one we just inserted)
                      doc.descendants((node, pos) => {
                        if (
                          node.type.name === "aiBlock" &&
                          node.attrs.data?.selectedAction === button.type &&
                          !node.attrs.data?.content
                        ) {
                          lastAIBlockPos = pos
                        }
                      })

                      if (lastAIBlockPos !== null) {
                        // Update the specific AIBlock with the generated content
                        const tr = state.tr.setNodeMarkup(
                          lastAIBlockPos,
                          undefined,
                          {
                            data: {
                              selectedAction: button.type,
                              content: content,
                            },
                            config: aiBlockConfig,
                          }
                        )
                        editor.view.dispatch(tr)

                        // Position cursor in the paragraph after the AIBlock
                        const node = doc.nodeAt(lastAIBlockPos)
                        if (node) {
                          let paragraphPos = lastAIBlockPos + node.nodeSize + 1
                          editor
                            .chain()
                            .focus()
                            .setTextSelection(paragraphPos)
                            .run()
                        }
                      }
                    }, 50)
                  } catch (error) {
                    console.error("AI action error:", error)
                    // Update the AIBlock to show error state
                    setTimeout(() => {
                      const { state } = editor
                      const { doc } = state
                      let lastAIBlockPos = null

                      // Find the last AIBlock that matches our criteria
                      doc.descendants((node, pos) => {
                        if (
                          node.type.name === "aiBlock" &&
                          node.attrs.data?.selectedAction === button.type &&
                          !node.attrs.data?.content
                        ) {
                          lastAIBlockPos = pos
                        }
                      })

                      if (lastAIBlockPos !== null) {
                        const tr = state.tr.setNodeMarkup(
                          lastAIBlockPos,
                          undefined,
                          {
                            data: {
                              selectedAction: button.type,
                              content: null,
                            },
                            config: aiBlockConfig,
                          }
                        )
                        editor.view.dispatch(tr)
                      }
                    }, 50)
                  }
                }, 100) // Small delay to ensure component is mounted and can detect loading state
              },
              icon: button.icon || Ai,
            })),
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
