import type { Meta, StoryObj } from "@storybook/react"
import { SidebarHeader } from "./index"

const meta = {
  component: SidebarHeader,
  tags: ["autodocs"],
  args: {
    companies: [
      {
        id: "1",
        name: "Factorial",
        logo: "https://github.com/factorialco.png",
      },
      { id: "2", name: "Dazlog", logo: "https://github.com/dazlog.png" },
      { id: "3", name: "Acme Corp" },
    ],
    selected: "1",
    onChange: (company) => console.log("Selected company:", company),
    isExpanded: true,
  },
} satisfies Meta<typeof SidebarHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Notification: Story = {
  args: {
    notification: true,
    additionalOptions: [
      {
        label: "Upload company avatar",
        value: "upload",
        description: "Personalise your experience",
      },
    ],
  },
}

export const NotificationSingle: Story = {
  args: {
    companies: [
      {
        id: "1",
        name: "Factorial",
        logo: "https://github.com/factorialco.png",
      },
    ],
    notification: true,
    additionalOptions: [
      {
        label: "Upload company avatar",
        value: "upload",
        description: "Personalise your experience",
      },
    ],
  },
}
