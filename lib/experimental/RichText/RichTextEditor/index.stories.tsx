import { Add } from "@/icons/app"
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
    prompt:
      "Take this text: '[TEXT]' and enhance the clarity, flow, and overall quality of the writing while keeping the original meaning intact.",
  },
  {
    id: "fix-spelling-grammar",
    label: "Fix Spelling & Grammar",
    prompt:
      "Correct the spelling and grammar in this text: '[TEXT]' and return the polished version.",
  },
  {
    id: "make-shorter",
    label: "Make Shorter",
    prompt:
      "Condense this text: '[TEXT]' into a shorter version without losing its core message.",
  },
  {
    id: "make-longer",
    label: "Make Longer",
    prompt:
      "Expand this text: '[TEXT]' by adding more detail and elaboration while maintaining its original intent.",
  },
  {
    id: "change-tone",
    label: "Change Tone",
    prompt: "", // Parent option with suboptions
    subOptions: [
      {
        id: "tone-casual",
        label: "Casual",
        prompt: "Rewrite this text: '[TEXT]' in a relaxed, casual tone.",
      },
      {
        id: "tone-professional",
        label: "Professional",
        prompt: "Revise this text: '[TEXT]' to sound formal and professional.",
      },
      {
        id: "tone-confident",
        label: "Confident",
        prompt: "Adjust this text: '[TEXT]' to convey a bold, confident tone.",
      },
      {
        id: "tone-straightforward",
        label: "Straightforward",
        prompt: "Simplify this text: '[TEXT]' into a direct, no-nonsense tone.",
      },
      {
        id: "tone-friendly",
        label: "Friendly",
        prompt: "Rework this text: '[TEXT]' to sound warm and friendly.",
      },
    ],
  },
  {
    id: "custom-intent",
    label: "Ask AI",
    prompt:
      "Remake this text: '[TEXT]' in order to fulfill this intent: '[INTENT]'",
  },
  {
    id: "turn-into-list",
    label: "Turn Into List",
    prompt: "Convert this text: '[TEXT]' into a concise bullet-point list.",
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
    onChange: (html) => console.log(html),
    placeholder: "Write something and test our fabulous editor...",
    mentionsConfig: { users: users },
    enhanceConfig: {
      onEnhanceText: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              error: "Error from AI, Jacob didn't finish his work",
              text: `<b>Just imagine this is an AI response from our friend</b> <a href="https://cdn.memegenerator.es/imagenes/memes/full/32/48/32486607.jpg" class="mention" data-id="2" rel="noopener noreferrer" target="_blank">@Jacob Bamio Cordero</a>`,
            })
          }, 1000)
        }),
      enhancementOptions: enhancementOptions,
      canUseCustomPrompt: true,
      enhanceLabels: {
        defaultError: "Error enhancing text, try again later",
        enhanceButtonLabel: "Magic",
        acceptChangesButtonLabel: "Accept changes",
        rejectChangesButtonLabel: "Reject changes",
        customPromptPlaceholder: "What do you want to do?",
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
      label: "Add",
      onClick: () => alert("Submit"),
      variant: "default",
      icon: Add,
    },
    secondaryActions: [
      {
        label: "Cancel",
        onClick: () => alert("Cancel"),
        variant: "critical",
      },
      {
        label: "Send tomorrow",
        onClick: () => alert("Send to AI"),
        variant: "neutral",
      },
    ],
    linkPopupConfig: { linkPlaceholder: "Write or paste a link" },
    title: "Rich Text Editor test",
    toolbarConfig: "all",
    maxCharacters: 1000,
  },
}
