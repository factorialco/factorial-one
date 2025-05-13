// packages/react/src/experimental/Banner/Banner.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { Banner } from "."

const meta: Meta<typeof Banner> = {
  title: "Banner",
  component: Banner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "promote"],
      description: "Banner purpose (activation or upselling)",
    },
    primaryAction: {
      control: "object",
      description: "Banner primary action",
    },
    secondaryAction: {
      control: "object",
      description: "Banner secondary actionr",
    },
  },
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    title: "Complete your financial picture",
    subtitle:
      "Without expenses, you're missing half the story. Add them to gain clarity and make better decisions.",
    image: "https://placehold.co/400x225", // 16:9 ratio
    variant: "default",
    primaryAction: {
      label: "Start now",
      onClick: () => alert("Request information"),
    },
    secondaryAction: {
      label: "Learn more",
      onClick: () => alert("Read more"),
    },
    onClose: () => alert("Closed"),
  },
}

export const Promote: Story = {
  args: {
    title: "Try our new feature!",
    subtitle: "Experience the new dashboard with enhanced analytics.",
    image: "https://placehold.co/400x225",
    variant: "promote",
    primaryAction: {
      label: "Request information",
      onClick: () => alert("Try now"),
    },
    secondaryAction: {
      label: "Learn more",
      onClick: () => alert("Learn more"),
    },
    onClose: () => alert("Closed"),
  },
}

export const OnlyPrimary: Story = {
  args: {
    title: "Upgrade your plan",
    subtitle: "Access more features and better support.",
    image: "https://placehold.co/400x225",
    primaryAction: {
      label: "Start now",
      onClick: () => alert("Upgrade"),
    },
    onClose: () => alert("Closed"),
  },
}
