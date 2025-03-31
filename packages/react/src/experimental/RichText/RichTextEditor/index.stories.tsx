import { Calendar } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import { EnhancementOption, FileType, RichTextEditor } from "."

const meta = {
  component: RichTextEditor,
  title: "Rich text/RichTextEditor",
} satisfies Meta<typeof RichTextEditor>

export default meta
type Story = StoryObj<typeof meta>

const enhancementOptions: EnhancementOption[] = [
  {
    id: "improve-writing",
    label: "Improve Writing",
  },
  {
    id: "make-shorter",
    label: "Make Shorter",
  },
  {
    id: "make-longer",
    label: "Make Longer",
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
    onChange: () => {},
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
          console.log(params)

          setTimeout(() => {
            resolve({
              success: true,
              error: "Error from AI, Jacob didn't finish his work",
              text: `<b>Just imagine this is an AI response from our friend Jacob</b>`,
            })
          }, 1000)
        }),
      enhancementOptions: enhancementOptions,
      enhanceLabels: {
        defaultError: "Error enhancing text, try again later",
        enhanceButtonLabel: "Magic",
        acceptChangesButtonLabel: "Accept",
        rejectChangesButtonLabel: "Reject",
        repeatButtonLabel: "Repeat",
        customPromptPlaceholder: "What do you want to do?",
        closeErrorButtonLabel: "Continue editing",
      },
    },
    filesConfig: {
      onFiles: (files) => console.log(files),
      multipleFiles: true,
      acceptedFileType: [
        FileType.IMAGE,
        FileType.VIDEO,
        FileType.PDF,
        FileType.DOC,
        FileType.EXCEL,
      ],
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

    linkPopupConfig: {
      linkPlaceholder: "Enter link http://here...",
      linkLabel: "Link",
    },
    title: "Rich Text Editor test",
    maxCharacters: 1000,
    initialEditorState: {
      content:
        "This is a test of the Rich Text Editor. It is a test of the Rich Text Editor. It is a test of the Rich Text Editor. It is a test of the Rich Text Editor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    showTitle: false,
  },
}
