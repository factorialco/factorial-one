import { useNavigation } from "@/lib/linkHandler"
import type { Meta, StoryObj } from "@storybook/react"
import { Tabs } from "."

const tabItems = [
  { label: "Overview", link: "/" },
  { label: "Courses", link: "/courses" },
  { label: "Categories", link: "/categories" },
  { label: "Catalog", link: "/catalog" },
  { label: "Requests", link: "/requests" },
]

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    secondary: {
      control: "boolean",
    },
  },
  render: ({ secondary = false }: { secondary?: boolean }) => {
    const { isActive } = useNavigation()
    const activeTab = tabItems.find((tab) =>
      isActive(tab.link, { exact: true })
    )

    return (
      <div onClick={(e) => e.preventDefault()}>
        <Tabs tabs={tabItems} secondary={secondary} />
        <p className="mt-4 flex h-full min-h-60 items-center justify-center rounded-lg bg-f1-background-secondary/50 p-4 text-f1-foreground-secondary">
          {activeTab?.label}
        </p>
      </div>
    )
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  args: {
    secondary: false,
  },
}

export const Secondary: Story = {
  args: {
    secondary: true,
  },
}
