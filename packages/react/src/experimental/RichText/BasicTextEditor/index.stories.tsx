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
  details: "drop-down",
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

const defaultLiveCompanionLabels = {
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
  oneTopicWithCommentary: "topic with commentary",
  multipleTopicsWithCommentary: "topics with commentary",
}

const defaultTranscriptLabels = {
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
  messagesCount: "messages",
  messagesCountSingular: "message",
}

const initialContent = {
  type: "doc",
  content: [
    {
      type: "heading",
      content: [
        {
          type: "text",
          text: "Titulo de la meeting",
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
      type: "liveCompanion",
      attrs: {
        data: {
          title: "Meeting live companion topics",
          topics: [
            {
              title: "Project Timeline",
              comments: [
                {
                  user: "Ana",
                  comment: "We should extend the deadline by two weeks.",
                },
                {
                  user: "Carlos",
                  comment: "I agree, we need more time for testing.",
                },
              ],
            },
            {
              title: "Project Timeline 2",
              comments: [
                {
                  user: "Ana",
                  comment: "We should extend the deadline by two weeks.",
                },
                {
                  user: "Carlos",
                  comment: "I agree, we need more time for testing.",
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: "transcript",
      attrs: {
        data: {
          title: "Meeting Transcript",
          messages: [
            {
              userId: "user1",
              text: "Hello everyone, let's start our weekly planning meeting.",
              dateTime: "2023-11-15T09:00:00Z",
            },
            {
              userId: "user2",
              text: "I've completed the design mockups for the new feature.",
              dateTime: "2023-11-15T09:02:30Z",
            },
            {
              userId: "user3",
              text: "Great! I can start implementing it tomorrow.",
              dateTime: "2023-11-15T09:04:15Z",
            },
            {
              userId: "user1",
              text: "Perfect. Let's aim to have a prototype by Friday.",
              dateTime: "2023-11-15T09:05:45Z",
            },
          ],
          users: [
            {
              id: "user1",
              fullname: "Maria Rodriguez",
              imageUrl: "https://i.pravatar.cc/150?u=maria",
            },
            {
              id: "user2",
              fullname: "Alex Chen",
              imageUrl: "https://i.pravatar.cc/150?u=alex",
            },
            {
              id: "user3",
              fullname: "David Kim",
              imageUrl: "https://i.pravatar.cc/150?u=david",
            },
          ],
        },
      },
    },
    {
      type: "aiBlock",
      attrs: {
        data: {},
      },
    },
    {
      type: "paragraph",
    },
  ],
}

export const Default: Story = {
  args: {
    placeholder: "Enter '/' to open the command palette...",
    labels: {
      toolbarLabels: defaultToolbarLabels,
      slashCommandGroupLabels: defaultSlashCommandGroupLabels,
      aiBlockLabels: defaultAIBlockLabels,
      moodTrackerLabels: defaultMoodTrackerLabels,
      liveCompanionLabels: defaultLiveCompanionLabels,
      transcriptLabels: defaultTranscriptLabels,
    },
    onChange: (value) => {
      console.log("Content changed:", value)
    },

    initialEditorState: {
      content: initialContent,
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
