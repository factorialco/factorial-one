import type { Meta, StoryObj } from "@storybook/react"
import { AlertAvatar } from "./index"

const meta: Meta<typeof AlertAvatar> = {
  component: AlertAvatar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AlertAvatar>

export const Default: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {["sm", "md", "lg"].map((size) => (
        <div key={size} className="flex flex-row gap-2">
          {["info", "warning", "critical"].map((type) => (
            <AlertAvatar
              key={`${size}-${type}`}
              size={size as "sm" | "md" | "lg"}
              type={type as "info" | "warning" | "critical"}
            />
          ))}
        </div>
      ))}
    </div>
  ),
}
