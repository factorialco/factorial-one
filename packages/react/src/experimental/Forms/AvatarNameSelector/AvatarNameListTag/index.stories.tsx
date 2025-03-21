import type { Meta, StoryObj } from "@storybook/react"

import { fn } from "@storybook/test"
import { ComponentProps } from "react"
import { AvatarNameListTag } from "./index"
import { famousEmployees } from "../avatar-name.factory"
import { mapAvatarNamedEntityToSubentity } from "../utils"

const meta: Meta = {
  component: AvatarNameListTag,
  title: "AvatarNameSelector/AvatarNameListTag",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    entity: mapAvatarNamedEntityToSubentity(famousEmployees[0]),
    onRemove: fn(),
  } satisfies ComponentProps<typeof AvatarNameListTag>,
} satisfies Meta<typeof AvatarNameListTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
