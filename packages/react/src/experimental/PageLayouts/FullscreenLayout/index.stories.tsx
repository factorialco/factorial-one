import type { Meta, StoryObj } from "@storybook/react"

import { PageDecorator } from "../../../lib/storybook-utils/pageDecorator"
import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { FullscreenLayout } from "./index"

const meta = {
  title: "Layout/FullscreenLayout",
  component: FullscreenLayout,
  tags: ["autodocs", "experimental"],
  decorators: [PageDecorator],
  args: {
    children: <Placeholder>Content</Placeholder>,
  },
} satisfies Meta<typeof FullscreenLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
