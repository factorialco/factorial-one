import type { Meta, StoryObj } from "@storybook/react"
import { BlankTextEditor } from "."
import { EnhancementOption, resultType } from "../CoreRichTextEditor"

const meta = {
  component: BlankTextEditor,
  title: "Rich text/BlankTextEditor",
  tags: ["experimental"],
  argTypes: {
    title: {
      control: "text",
      description: "Sets the title displayed in the editor header",
      required: true,
    },
    placeholder: {
      control: "text",
      description: "Text displayed when the editor is empty",
      required: true,
    },
    onChange: {
      control: false,
      description:
        "Callback function triggered when editor content changes. Receives an object with { value: string | null, mentionIds?: number[] }",
      required: true,
    },
    initialEditorState: {
      control: "object",
      description:
        "Pre-populates the editor with content and/or files. Format: { content?: string, files?: File[] }",
    },
    mentionsConfig: {
      control: "object",
      description:
        "Configures user mention functionality with available users and optional query handler",
    },
    enhanceConfig: {
      control: "object",
      description:
        "Configures AI enhancement functionality including onEnhanceText function, enhancement options, and UI labels",
    },

    toolbarLabels: {
      control: "object",
      description:
        "Object with labels for all toolbar elements. Required for tooltips and accessibility",
      required: true,
    },
    errorConfig: {
      control: "object",
      description: "Configures error message display and recovery options",
    },
  },
} satisfies Meta<typeof BlankTextEditor>

export default meta
type Story = StoryObj<typeof meta>

const enhancementOptions: EnhancementOption[] = [
  {
    id: "error",
    label: "This is gonna fail",
  },
  {
    id: "improve-writing",
    label: "Improve Writing",
  },
  {
    id: "change-tone",
    label: "Change Tone",
    subOptions: [
      {
        id: "tone-casual",
        label: "Casual",
      },
      {
        id: "tone-professional",
        label: "Professional",
      },
      {
        id: "tone-confident",
        label: "Confident",
      },
      {
        id: "tone-straightforward",
        label: "Straightforward",
      },
      {
        id: "tone-friendly",
        label: "Friendly",
      },
    ],
  },
  {
    id: "translate",
    label: "Translate",
    subOptions: [
      {
        id: "translate-to-spanish",
        label: "Spanish",
      },
      {
        id: "translate-to-english",
        label: "English",
      },
      {
        id: "translate-to-french",
        label: "French",
      },
      {
        id: "translate-to-german",
        label: "German",
      },
    ],
  },
]

const users = [
  {
    id: 1,
    label: "Raúl Sigüenza Sánchez",
    href: "https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg",
  },
  {
    id: 2,
    label: "Jacob Bamio Cordero",
    href: "https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg",
  },
  {
    id: 3,
    label: "Xavier Val Parejo",
    href: "https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg",
  },
]

export const Default: Story = {
  tags: ["experimental"],
  args: {
    title: "Ode to My Text Editor",
    onChange: (result: resultType) => {
      console.log(result)
    },
    placeholder: "Write '/' for commands...",
    mentionsConfig: { users: users },
    enhanceConfig: {
      onEnhanceText: (params: {
        text: string
        selectedIntent?: string
        customIntent?: string
        context?: string
      }) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: !(params.selectedIntent === "error"),
              error: "Error from AI, Jacob didn't finish his work",
              text: `<b>Just imagine this is an AI response from our friend Jacob</b>`,
            })
          }, 2000)
        }),
      enhancementOptions: enhancementOptions,
      enhanceLabels: {
        defaultError: "Error enhancing text, try again later",
        enhanceButtonLabel: "Magic",
        acceptChangesButtonLabel: "Accept",
        rejectChangesButtonLabel: "Reject",
        repeatButtonLabel: "Repeat",
        customPromptPlaceholder: "What do you want to do?",
        loadingEnhanceLabel: "Loading the magic...",
      },
    },

    toolbarLabels: {
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      strike: "Strike",
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
      linkPlaceholder: "Enter link http://here...",
      linkLabel: "Link",
      linkPaste: "Paste",
      close: "Close",
    },

    initialEditorState: {
      content:
        "<p>There was a time when I wandered in the dark — lost in the chaos of tangled syntax, broken builds, and tabs that betrayed me. My code was clumsy, my patience thin. But then, like a lighthouse in a storm, <strong>you appeared</strong>. Sleek, fast, and strangely comforting, my text editor. You didn't just open files — you opened <em>possibilities</em>",
    },
    errorConfig: {
      onClose: () => alert("Close"),
      closeErrorButtonLabel: "Continue editing",
    },
  },
}

export const WithoutEnhance: Story = {
  args: {
    ...Default.args,
    enhanceConfig: undefined,
  },
}
