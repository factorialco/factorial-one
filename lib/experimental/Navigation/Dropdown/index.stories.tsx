import { PersonAvatar } from "@/experimental/Information/Avatars/UserAvatar"
import type { Meta, StoryObj } from "@storybook/react"
import { Dropdown } from "."

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  args: {
    items: [
      {
        label: "Create",
        onClick: () => console.log("Create clicked"),
        icon: "Add",
        description: "New creation process",
      },
      {
        label: "Edit",
        onClick: () => console.log("Edit clicked"),
        icon: "Pencil",
        description: "Edit item's information",
      },
      {
        label: "Save",
        onClick: () => console.log("Save clicked"),
        icon: "Save",
        description: "Preserve changes",
      },
      {
        label: "Delete",
        onClick: () => console.log("Delete clicked"),
        description: "Remove item",
        critical: true,
        icon: "Delete",
      },
    ],
  },
}

export const WithCustomTrigger: Story = {
  args: {
    items: [
      {
        label: "Upload new avatar",
        onClick: () => console.log("Create clicked"),
      },
      {
        label: "Delete current avatar",
        onClick: () => console.log("Delete clicked"),
        critical: true,
      },
    ],
  },
  render: (args) => (
    <Dropdown {...args}>
      <button>
        <PersonAvatar
          src="https://github.com/dani-moreno.png"
          firstName="Dani"
          lastName="Moreno"
          size="large"
        />
      </button>
    </Dropdown>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "button-name",
            enabled: false,
          },
        ],
      },
    },
  },
}

export const WithLinks: Story = {
  args: {
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        description: "View your dashboard",
        icon: "Home",
      },
      {
        label: "Settings",
        href: "/settings",
        description: "Adjust your settings",
        icon: "Settings",
      },
      {
        label: "Help",
        href: "/help",
        description: "Get help and support",
        icon: "Info",
      },
    ],
  },
}
