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
    initialEditorState: {
      content: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            attrs: {
              textAlign: null,
            },
            content: [
              {
                type: "text",
                text: "This is a document with mood tracking:",
              },
            ],
          },
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
                    mood: 5,
                    comment:
                      "More training opportunities would help us grow our skills.",
                  },
                  {
                    day: "Tuesday",
                    mood: 5,
                    comment: "-",
                  },
                  {
                    day: "Wednesday",
                    mood: 4,
                    comment: "Great team collaboration today!",
                  },
                  {
                    day: "Thursday",
                    mood: 3,
                    comment: "Average day, nothing special.",
                  },
                  {
                    day: "Friday",
                    mood: 5,
                    comment: "Amazing presentation, very proud of the team!",
                  },
                  {
                    day: "Saturday",
                    mood: 4,
                    comment: "Average day, nothing special.",
                  },
                  {
                    day: "Sunday",
                    mood: 2,
                    comment: "Average day, nothing special.",
                  },
                ],
              },
            },
          },
          {
            type: "paragraph",
            attrs: {
              textAlign: null,
            },
            content: [
              {
                type: "text",
                text: "You can continue writing after the mood tracker...",
              },
            ],
          },
        ],
      },
    },
  },
}
