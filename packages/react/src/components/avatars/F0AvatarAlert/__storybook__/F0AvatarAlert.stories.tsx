import type { Meta, StoryObj } from "@storybook/react-vite"
import { F0AvatarAlert } from "../F0AvatarAlert"

const meta: Meta<typeof F0AvatarAlert> = {
  component: F0AvatarAlert,
  title: "Avatars/AvatarAlert",
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof F0AvatarAlert>

const SIZES = ["sm", "md", "lg"] as const
const TYPES = ["info", "warning", "critical", "positive"] as const
export const Default: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-row gap-2">
          {TYPES.map((type) => (
            <F0AvatarAlert key={`${size}-${type}`} size={size} type={type} />
          ))}
        </div>
      ))}
    </div>
  ),
}
