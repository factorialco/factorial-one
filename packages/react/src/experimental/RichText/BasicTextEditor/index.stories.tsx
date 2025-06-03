import type { Meta, StoryObj } from "@storybook/react"
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
    onChange: (value: string | null) => {
      console.log("Content changed:", value)
    },
    initialEditorState: {
      content:
        "<p>This is some <strong>initial content</strong> with <em>formatting</em>.</p>",
    },
  },
}

export const SpanishLabels: Story = {
  args: {
    placeholder: "Escribe '/' para abrir la paleta de comandos...",
    toolbarLabels: {
      ...defaultToolbarLabels,
      heading1: "Encabezado 1",
      heading2: "Encabezado 2",
      heading3: "Encabezado 3",
      bulletList: "Lista de puntos",
      orderedList: "Lista numerada",
      taskList: "Lista de tareas",
      codeBlock: "Bloque de código",
      quote: "Cita",
      divider: "Divisor",
    },
    slashCommandGroupLabels: {
      textStyles: "Estilos de Texto",
      lists: "Listas",
      blocks: "Bloques",
    },
    onChange: (value: string | null) => {
      console.log("Content changed:", value)
    },
    initialEditorState: {
      content:
        "<p>Este es contenido <strong>inicial</strong> con <em>formato</em>.</p>",
    },
  },
}
