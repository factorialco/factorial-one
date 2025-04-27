import { Calendar } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react"
import {
  EnhancementOption,
  FILE_TYPES,
  resultType,
} from "../RichTextEditorBase"
import { CommentBox } from "./"

const meta = {
  component: CommentBox,
  title: "Rich text/CommentBox",
  tags: ["experimental"],
  argTypes: {
    title: {
      control: "text",
      description: "Sets the title displayed in the comment box header",
      required: true,
    },
    placeholder: {
      control: "text",
      description: "Text displayed when the comment box is empty",
      required: true,
    },
    onChange: {
      control: false,
      description:
        "Callback function triggered when comment box content changes. Receives an object with { value: string | null, mentionIds?: number[] }",
      required: true,
    },
    initialEditorState: {
      control: "object",
      description:
        "Pre-populates the comment box with content and/or files. Format: { content?: string, files?: File[] }",
    },
    enhanceConfig: {
      control: "object",
      description:
        "Configures AI enhancement functionality including onEnhanceText function, enhancement options, and UI labels",
    },
    filesConfig: {
      control: "object",
      description:
        "Configures file attachment capabilities including callbacks, multiple file support, and file type filtering",
    },
    primaryAction: {
      control: "object",
      description:
        "Configures the primary action button and optional dropdown actions",
    },
    secondaryAction: {
      control: "object",
      description:
        "Configures the secondary action button (usually cancel or discard)",
    },
    maxCharacters: {
      control: "number",
      description: "Limits the number of characters that can be entered",
    },
    errorConfig: {
      control: "object",
      description: "Configures error message display and recovery options",
    },
  },
} satisfies Meta<typeof CommentBox>

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

export const Default: Story = {
  tags: ["experimental"],
  args: {
    title: "Ode to My Text Editor",
    onChange: (result: resultType) => {
      console.log(result)
    },
    placeholder: "Write something here...",
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

    maxCharacters: 10000,
    initialEditorState: {
      content: "Hi there!!! this is a comment box with AI functionalities",
    },
    errorConfig: {
      onClose: () => alert("Close"),
      closeErrorButtonLabel: "Continue editing",
    },
  },
}

type SkeletonStory = StoryObj<typeof CommentBox.Skeleton>

export const Skeleton: SkeletonStory = {
  tags: ["experimental"],
  render: () => <CommentBox.Skeleton />,
}

export const Blank: Story = {
  args: {
    ...Default.args,
    enhanceConfig: undefined,
    filesConfig: undefined,
    primaryAction: undefined,
    secondaryAction: undefined,
    initialEditorState: undefined,
    maxCharacters: undefined,
  },
}
