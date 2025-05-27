import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { BlankTextEditor } from "."

const meta: Meta<typeof BlankTextEditor> = {
  title: "Rich Text/BlankTextEditor",
  component: BlankTextEditor,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
        The BlankTextEditor is a minimal text editor without borders or headers.
        It provides a clean, borderless interface suitable for inline editing or minimal design requirements.

        **Key Features:**
        - Minimal UI without borders or headers
        - Rich text editing capabilities
        - Support for mentions, file uploads, and AI enhancement
        - Suitable for inline editing scenarios
        `,
      },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BlankTextEditor>

const defaultToolbarLabels = {
  bold: "Bold",
  italic: "Italic",
  underline: "Underline",
  strike: "Strike",
  highlight: "Highlight",
  heading1: "Heading 1",
  heading2: "Heading 2",
  heading3: "Heading 3",
  left: "Align Left",
  center: "Align Center",
  right: "Align Right",
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
  linkPlaceholder: "Enter URL",
  linkLabel: "Link",
  linkPaste: "Paste",
  close: "Close",
}

export const Default: Story = {
  render: (args) => {
    const [content, setContent] = useState("")

    return (
      <div className="w-full">
        <BlankTextEditor
          {...args}
          onChange={(result) => {
            setContent(result.value || "")
          }}
        />
        <div className="mt-4 rounded bg-f1-background-hover p-4">
          <h3 className="mb-2 text-sm font-medium">Output:</h3>
          <div className="text-xs text-f1-foreground-tertiary">
            {content || "No content yet..."}
          </div>
        </div>
      </div>
    )
  },
  args: {
    placeholder: "Start typing...",
    title: "Blank Text Editor",
    toolbarLabels: defaultToolbarLabels,
    mentionsConfig: {
      users: [
        { id: 1, label: "John Doe" },
        { id: 2, label: "Jane Smith" },
        { id: 3, label: "Bob Johnson" },
      ],
    },
  },
}
