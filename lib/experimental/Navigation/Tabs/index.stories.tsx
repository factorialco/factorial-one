import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Tabs } from "."

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    secondary: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

const tabItems = [
  { label: "Overview", link: "/overview" },
  { label: "Courses", link: "/courses" },
  { label: "Categories", link: "/categories" },
  { label: "Catalog", link: "/catalog" },
  { label: "Requests", link: "/requests" },
]

const TabsExample = ({ secondary = false }: { secondary?: boolean }) => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <div onClick={(e) => e.preventDefault()}>
      <Tabs
        tabs={tabItems}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab.label)
          action("Tab changed")(tab)
        }}
        secondary={secondary}
      />
      <p className="mt-4 flex h-full min-h-60 items-center justify-center rounded-lg bg-f1-background-secondary/50 p-4 text-f1-foreground-secondary">
        {activeTab}
      </p>
    </div>
  )
}

export const Primary: Story = {
  args: {
    secondary: false,
  },
  render: (args) => <TabsExample {...args} />,
}

export const Secondary: Story = {
  args: {
    secondary: true,
  },
  render: (args) => <TabsExample {...args} />,
}
