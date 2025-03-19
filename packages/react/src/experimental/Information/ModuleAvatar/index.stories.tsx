import * as iconComponents from "../../../icons/modules"
import type { Meta, StoryObj } from "@storybook/react"
import { ModuleAvatar } from "./index"

const meta: Meta<typeof ModuleAvatar> = {
  component: ModuleAvatar,
  title: "Avatars/ModuleAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
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
    icon: iconComponents.Home,
    size: "lg",
  },
}

export const AllModules: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {Object.keys(iconComponents).map((icon) => (
        <ModuleAvatar
          key={icon}
          icon={iconComponents[icon as keyof typeof iconComponents]}
          size="lg"
        />
      ))}
    </div>
  ),
}
