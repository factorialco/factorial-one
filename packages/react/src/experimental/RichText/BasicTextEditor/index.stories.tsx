import { AcademicCap, List } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { BasicTextEditor } from "./index"

const meta: Meta<typeof BasicTextEditor> = {
  title: "Rich text/BasicTextEditor",
  component: BasicTextEditor,
  tags: ["experimental"],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultToolbarLabels = {
  bold: "Bold",
  italic: "Italic",
  underline: "Underline",
  strike: "Strikethrough",
  highlight: "Highlight",
  heading1: "Heading 1",
  heading2: "Heading 2",
  heading3: "Heading 3",
  left: "Left",
  center: "Center",
  right: "Right",
  justify: "Justify",
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  taskList: "Task List",
  codeBlock: "Code Block",
  horizontalRule: "Horizontal Rule",
  quote: "Quote",
  moreOptions: "More Options",
  code: "Code",
  divider: "Divider",
  bullet: "Bullet",
  ordered: "Ordered",
  task: "Task",
  linkPlaceholder: "Enter URL...",
  linkLabel: "Link",
  linkPaste: "Paste",
  close: "Close",
}

const defaultSlashCommandGroupLabels = {
  textStyles: "Text Styles",
  lists: "Lists",
  blocks: "Blocks",
}

const defaultAIBlockLabels = {
  reset: "Reset",
  resetDescription: "Clear content and start over",
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
}

const defaultMoodTrackerLabels = {
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
}

export const Default: Story = {
  args: {
    placeholder: "Enter '/' to open the command palette...",
    labels: {
      toolbarLabels: defaultToolbarLabels,
      slashCommandGroupLabels: defaultSlashCommandGroupLabels,
      aiBlockLabels: defaultAIBlockLabels,
      moodTrackerLabels: defaultMoodTrackerLabels,
    },
    onChange: (value) => {
      console.log("Content changed:", value)
    },

    initialEditorState: {
      content: {
        type: "doc",
        content: [
          {
            type: "moodTracker",
            attrs: {
              data: {
                title: "Last week mood tracker:",
                averageMoodComment:
                  'Average feeling of "manolo" this week: Walking on sunshine',
                days: [
                  {
                    day: "Monday",
                    mood: "superPositive",
                    comment:
                      "More training opportunities would help us grow our skills.",
                  },
                  {
                    day: "Tuesday",
                    mood: "superPositive",
                    comment: "Great team collaboration today!",
                  },
                ],
              },
            },
          },
          {
            type: "aiBlock",
            attrs: {
              data: {
                content: null,
                selectedAction: undefined,
              },
            },
          },
        ],
      },
    },

    aiBlockConfig: {
      title: "AI Pre-Meeting Helper",
      onClick: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              type: "taskList",
              content: [
                {
                  type: "taskItem",
                  attrs: {
                    checked: false,
                  },
                  content: [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: null,
                      },
                      content: [
                        {
                          type: "text",
                          text: "Lista de ejemplo",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "taskItem",
                  attrs: {
                    checked: false,
                  },
                  content: [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: null,
                      },
                      content: [
                        {
                          type: "text",
                          text: "hola hola",
                        },
                      ],
                    },
                  ],
                },
              ],
            })
          }, 1000)
        })
      },
      buttons: [
        {
          type: "factorial-format",
          emoji: "🤖",
          label: "Factorial format",
          icon: AcademicCap,
        },
        {
          type: "task-list",
          emoji: "📝",
          label: "Task list (custom)",
          icon: List,
        },
      ],
    },
  },
}
