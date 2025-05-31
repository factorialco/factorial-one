import type { Meta, StoryObj } from "@storybook/react"
import { useRef } from "react"
import { BlankTextEditor, BlankTextEditorHandle } from "./index"

const meta: Meta<typeof BlankTextEditor> = {
  title: "Experimental/RichText/BlankTextEditor",
  component: BlankTextEditor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
  },
}

export const WithInitialContent: Story = {
  args: {
    placeholder: "Start typing...",
    toolbarLabels: defaultToolbarLabels,
    initialEditorState: {
      content:
        "<p>This is some <strong>initial content</strong> with <em>formatting</em>.</p>",
    },
    onChange: (value: string | null) => {
      console.log("Content changed:", value)
    },
  },
}

export const WithImperativeHandle: Story = {
  render: (args) => {
    const editorRef = useRef<BlankTextEditorHandle>(null)

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => editorRef.current?.focus()}
            className="bg-blue-500 text-white rounded px-3 py-1"
          >
            Focus
          </button>
          <button
            onClick={() => editorRef.current?.clear()}
            className="bg-red-500 text-white rounded px-3 py-1"
          >
            Clear
          </button>
          <button
            onClick={() =>
              editorRef.current?.setContent(
                "<p>New content set via <strong>imperative handle</strong>!</p>"
              )
            }
            className="bg-green-500 text-white rounded px-3 py-1"
          >
            Set Content
          </button>
        </div>
        <BlankTextEditor
          onChange={() => {}}
          placeholder={"Prueba"}
          toolbarLabels={defaultToolbarLabels}
          ref={editorRef}
          {...args}
        />
      </div>
    )
  },
  args: {
    placeholder: "Start typing...",
    toolbarLabels: defaultToolbarLabels,
    onChange: (value: string | null) => {
      console.log("Content changed:", value)
    },
  },
}
