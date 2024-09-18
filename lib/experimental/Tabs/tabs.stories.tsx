import { action } from "@storybook/addon-actions"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Tabs } from "."

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
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

const TabsExample = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <div onClick={(e) => e.preventDefault()}>
      <Tabs
        tabs={tabItems}
        activeTab={activeTab}
        onTabChange={(label) => {
          setActiveTab(label)
          action("Tab changed")(label)
        }}
      />
      <p className="mt-4 flex h-full min-h-60 items-center justify-center rounded-lg bg-f1-background-secondary/50 p-4 text-f1-foreground-secondary">
        {activeTab}
      </p>
    </div>
  )
}

export const Default: Story = {
  render: () => <TabsExample />,
}
