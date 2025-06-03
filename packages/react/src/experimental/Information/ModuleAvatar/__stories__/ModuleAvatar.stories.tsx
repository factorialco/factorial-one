import type { Meta, StoryObj } from "@storybook/react"
import { ModuleAvatar } from "../index"
import { ModuleId, modules } from "../modules"

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
      options: Object.keys(modules).sort((a, b) => a.localeCompare(b)),
    },
    icon: {
      description:
        "DEPRECATED: This component should only render module related icons, not arbitrary icons. Use the `module` prop instead.",
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
        <div key={module} title={module}>
          <ModuleAvatar module={module as ModuleId} size="lg" />
        </div>
      ))}
    </div>
  ),
}
