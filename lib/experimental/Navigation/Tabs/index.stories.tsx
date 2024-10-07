import type { Meta, StoryObj } from "@storybook/react"
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
  { label: "Overview", link: "/" },
  { label: "Courses", link: "/courses" },
  { label: "Categories", link: "/categories" },
  { label: "Catalog", link: "/catalog" },
  { label: "Requests", link: "/requests" },
]

const TabsExample = ({ secondary = false }: { secondary?: boolean }) => {
  return (
    <div onClick={(e) => e.preventDefault()}>
      <Tabs tabs={tabItems} secondary={secondary} />
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
