import type { Meta, StoryObj } from "@storybook/react"
import { Drawer } from "."

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    items: [
      {
        label: "Emily Johnson",
        onClick: () => console.log("Emily Johnson clicked"),
      },
      {
        label: "Michael Brown",
        onClick: () => console.log("Michael Brown clicked"),
      },
      {
        label: "Sarah Lee",
        onClick: () => console.log("Sarah Lee clicked"),
      },
      {
        label: "Kevin White",
        onClick: () => console.log("Kevin White clicked"),
      },
      {
        label: "Jessica Davis",
        onClick: () => console.log("Jessica Davis clicked"),
      },
    ],
    triggerText: "Choose a user",
  },
}

export const WithCustomTrigger: Story = {
  args: {
    items: [
      {
        label: "Create",
        onClick: () => console.log("Create clicked"),
      },
      {
        label: "Edit",
        onClick: () => console.log("Edit clicked"),
      },
      {
        label: "Delete",
        onClick: () => console.log("Delete clicked"),
      },
      {
        label: "Save",
        onClick: () => console.log("Save clicked"),
      },
    ],
  },
  render: (args) => (
    <Drawer {...args}>
      <span className="cursor-pointer underline">Open drawer</span>
    </Drawer>
  ),
}

export const WithSearch: Story = {
  args: {
    search: true,
    noResultsText: "No results found",
    items: [
      {
        label: "Home",
        onClick: () => console.log("Home clicked"),
        icon: "Home",
        description: "This is a description",
      },
      {
        label: "Help",
        onClick: () => console.log("Help clicked"),
        icon: "Home",
        description: "This is a description",
      },
    ],
    triggerText: "Open Options",
  },
}
