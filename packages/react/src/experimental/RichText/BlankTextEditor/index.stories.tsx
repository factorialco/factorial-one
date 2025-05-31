import type { Meta, StoryObj } from "@storybook/react"
import { BlankTextEditor } from "./index"

const meta: Meta<typeof BlankTextEditor> = {
  title: "Rich text/BlankTextEditor",
  component: BlankTextEditor,
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

export const Default: Story = {
  args: {
    placeholder: "Start typing...",
    toolbarLabels: defaultToolbarLabels,
    onChange: (value: string | null) => {
      console.log("Content changed:", value)
    },
    initialEditorState: {
      content:
        "<p>This is some <strong>initial content</strong> with <em>formatting</em>.</p>",
    },
  },
}
