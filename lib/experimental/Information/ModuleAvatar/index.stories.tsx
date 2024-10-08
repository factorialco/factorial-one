import type { Meta, StoryObj } from "@storybook/react"
import { iconComponents, ModuleAvatar, ModuleAvatarProps } from "."

const iconOptions = Object.keys(iconComponents) as ModuleAvatarProps["icon"][]

const meta: Meta<typeof ModuleAvatar> = {
  component: ModuleAvatar,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: iconOptions,
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta

type Story = StoryObj<typeof ModuleAvatar>

export const Default: Story = {
  args: {
    icon: "Home",
    size: "lg",
  },
}

export const AllModules: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {iconOptions.map((icon) => (
        <ModuleAvatar key={icon} icon={icon} size="lg" />
      ))}
    </div>
  ),
}
