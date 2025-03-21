import type { Meta, StoryObj } from "@storybook/react"
import { AlertAvatar } from "./index"

const meta: Meta<typeof AlertAvatar> = {
  component: AlertAvatar,
  title: "Avatars/AlertAvatar",
  tags: ["autodocs", "experimental"],
}

export default meta
type Story = StoryObj<typeof AlertAvatar>

const SIZES = ["sm", "md", "lg"] as const
const TYPES = ["info", "warning", "critical"] as const
export const Default: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-row gap-2">
          {TYPES.map((type) => (
            <AlertAvatar key={`${size}-${type}`} size={size} type={type} />
          ))}
        </div>
      ))}
    </div>
  ),
}
