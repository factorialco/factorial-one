import type { Meta, StoryObj } from "@storybook/react"
import { EnhancementOption, RichTextEditor } from "."

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
    href: "https://www.google.com",
  },
  {
    id: 2,
    label: "Jacob Bamio Cordero",
    href: "https://www.google.com",
  },
  {
    id: 3,
    label: "Xavier Val Parejo",
    href: "https://www.google.com",
  },
]
export const Default: Story = {
  tags: ["experimental"],
  args: {
    onChange: (html) => {
      console.log(html)
    },
    placeholder: "Write something and test our fabulous editor...",
    width: "w-full",
    // Mentions configuration
    hasMentions: true,
    hasDebouncedMentions: false,
    onMentionQueryStringChanged: () => Promise.resolve(users),
    users: users,
    // AI enhancement
    enhanceText: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            "Just imagine this is a response from AI from our friend Jacob"
          )
        }, 1000)
      }),
    enhancementOptions: enhancementOptions,
    canUseCustomPrompt: true,
    // File handling
    onFiles: () => {},
    maxCharacters: 1000,
    // Actions
    onSubmit: () => {
      alert("Submit")
    },
    onCancel: () => {
      alert("Cancel")
    },
    // Miscellaneous
    title: "RichTextEditor",
    fullScreenEnabled: true,
  },
}
