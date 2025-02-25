import type { Meta, StoryObj } from "@storybook/react"

import { PageDecorator } from "@/lib/storybook-utils/pageDecorator.tsx"
import { Placeholder } from "@/lib/storybook-utils/placeholder.tsx"
import { StandardLayout } from "./index.tsx"

const meta = {
  title: "Layout/StandardLayout",
  component: StandardLayout,
  tags: ["autodocs", "experimental"],
  decorators: [PageDecorator],
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Placeholder key={i}>Content</Placeholder>
        ))}
      </>
    ),
  },
} satisfies Meta<typeof StandardLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Narrow: Story = {
  args: {
    variant: "narrow",
  },
}
