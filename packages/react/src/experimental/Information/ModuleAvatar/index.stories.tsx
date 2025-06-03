import type { Meta, StoryObj } from "@storybook/react"
import { ModuleAvatar } from "./index"
import { ModuleId, modules } from "./modules"

const meta: Meta<typeof ModuleAvatar> = {
  component: ModuleAvatar,
  title: "Avatars/ModuleAvatar",
  tags: ["autodocs", "experimental"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    module: {
      control: "select",
      options: Object.keys(modules),
    },
  },
}

export default meta

type Story = StoryObj<typeof ModuleAvatar>

export const Default: Story = {
  args: {
    module: "home",
    size: "lg",
  },
}

export const AllModules: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      {Object.keys(modules).map((module) => (
        <ModuleAvatar key={module} module={module as ModuleId} size="lg" />
      ))}
    </div>
  ),
}
