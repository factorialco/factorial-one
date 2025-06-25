import { AcademicCap, Archive, List } from "@/icons/app"
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
                      },
                      {
                        day: "Tuesday",
                        mood: "superPositive",
                        comment: "Great team collaboration today!",
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
            resolve([
              {
                type: "paragraph",
                attrs: {
                  textAlign: null,
                },
                content: [
                  {
                    type: "text",
                    text: "Key Insights",
                    marks: [
                      {
                        type: "textStyle",
                        attrs: {
                          color: "rgb(81, 81, 100)",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          textAlign: null,
                        },
                        content: [
                          {
                            type: "text",
                            text: "The meeting highlighted the attendee's commitment to professional development, as evidenced by their engagement in training courses.",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          textAlign: null,
                        },
                        content: [
                          {
                            type: "text",
                            text: "Salary stability was acknowledged, with no recent changes or fluctuations noted.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "paragraph",
                attrs: {
                  textAlign: null,
                },
                content: [
                  {
                    type: "text",
                    text: "Follow-up Questions",
                    marks: [
                      {
                        type: "textStyle",
                        attrs: {
                          color: "rgb(81, 81, 100)",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "bulletList",
                content: [
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          textAlign: null,
                        },
                        content: [
                          {
                            type: "text",
                            text: "What specific areas of professional development are you interested in pursuing further?",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "listItem",
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          textAlign: null,
                        },
                        content: [
                          {
                            type: "text",
                            text: "Are there any particular challenges you're facing that we should address?",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: "paragraph",
                attrs: {
                  textAlign: null,
                },
                content: [
                  {
                    type: "text",
                    text: "Actionable Items",
                    marks: [
                      {
                        type: "textStyle",
                        attrs: {
                          color: "rgb(81, 81, 100)",
                        },
                      },
                    ],
                  },
                ],
              },
              {
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
                            text: "Review potential opportunities for further professional development and training.",
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
                            text: "Discuss possible career progression paths in the next meeting.",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ])
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
          type: "mood-tracker",
          emoji: "🌈",
          label: "Mood tracker",
          icon: Archive,
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
