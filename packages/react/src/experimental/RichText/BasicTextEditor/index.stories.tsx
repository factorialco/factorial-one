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

export const Default: Story = {
  args: {
    placeholder: "Enter '/' to open the command palette...",
    toolbarLabels: defaultToolbarLabels,
    slashCommandGroupLabels: defaultSlashCommandGroupLabels,
    onChange: (value) => {
      console.log("Content changed:", value)
    },

    aiBlockConfig: {
      title: "AI Pre-Meeting Helper",
      onClick: (type) => {
        if (type === "task-list") {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                type: "taskList",
                attrs: {
                  data: {
                    title: "Task list",
                    tasks: [
                      {
                        title: "Task 1",
                        completed: false,
                      },
                      {
                        title: "Task 2",
                        completed: true,
                      },
                    ],
                  },
                },
              })
            }, 1000)
          })
        }
        if (type === "mood-tracker") {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
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
                        action: {
                          label: "Edit",
                          onClick: () => {
                            console.log("Edit mood tracker Monday")
                          },
                        },
                      },
                      {
                        day: "Tuesday",
                        mood: "superPositive",
                        comment: "Great team collaboration today!",
                        action: {
                          label: "Edit",
                          onClick: () => {
                            console.log("Edit mood tracker Tuesday")
                          },
                        },
                      },
                    ],
                  },
                },
              })
            }, 1000)
          })
        }

        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "This is an example of a custom AI block",
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
        },
        {
          type: "mood-tracker",
          emoji: "🌈",
          label: "Mood tracker",
        },
        {
          type: "task-list",
          emoji: "📝",
          label: "Task list (custom)",
        },
      ],
    },
  },
}
