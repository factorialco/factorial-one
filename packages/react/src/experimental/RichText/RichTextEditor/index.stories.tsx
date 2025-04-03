import { Calendar } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { EnhancementOption, FILE_TYPES, resultType, RichTextEditor } from "."

const meta = {
  component: RichTextEditor,
  title: "Rich text/RichTextEditor",
} satisfies Meta<typeof RichTextEditor>

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
    placeholder: "Write something here...",
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
    filesConfig: {
      onFiles: (files) => console.log(files),
      multipleFiles: true,
      acceptedFileType: [FILE_TYPES.IMAGE, FILE_TYPES.VIDEO, FILE_TYPES.PDF],
    },
    primaryAction: {
      action: {
        label: "Add",
        onClick: () => alert("Add"),
        variant: "default",
      },
      subActions: [
        {
          label: "Add tomorrow",
          onClick: () => alert("Add tomorrow"),
          icon: Calendar,
        },
        {
          label: "Add next week",
          onClick: () => alert("Add next week"),
        },
      ],
    },
    secondaryAction: {
      label: "Cancel",
      onClick: () => alert("Cancel"),
      variant: "outline",
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

    maxCharacters: 10000,
    initialEditorState: {
      content:
        "<p>There was a time when I wandered in the dark — lost in the chaos of tangled syntax, broken builds, and tabs that betrayed me. My code was clumsy, my patience thin. But then, like a lighthouse in a storm, <strong>you appeared</strong>. Sleek, fast, and strangely comforting, my text editor. You didn’t just open files — you opened <em>possibilities</em>",
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

export const WithoutFiles: Story = {
  args: {
    ...Default.args,
    filesConfig: undefined,
  },
}

export const JustOnePrimaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      action: {
        label: "Add",
        onClick: () => alert("Add"),
        variant: "default",
      },
    },
    secondaryAction: undefined,
  },
}

export const JustSecondaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: undefined,
    secondaryAction: {
      label: "Cancel",
      onClick: () => alert("Cancel"),
      variant: "outline",
    },
  },
}

export const WithoutActions: Story = {
  args: {
    ...Default.args,
    primaryAction: undefined,
    secondaryAction: undefined,
  },
}

export const Blank: Story = {
  args: {
    ...Default.args,
    enhanceConfig: undefined,
    filesConfig: undefined,
    primaryAction: undefined,
    secondaryAction: undefined,
    initialEditorState: undefined,
    mentionsConfig: undefined,
    maxCharacters: undefined,
  },
}
