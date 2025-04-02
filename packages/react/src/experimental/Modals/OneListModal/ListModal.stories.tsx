import DeleteIcon from "@/icons/app/Delete"
import PencilIcon from "@/icons/app/Pencil"
import type { Meta, StoryObj } from "@storybook/react"
import { ListModal } from "./OneListModal"

const meta: Meta<typeof ListModal> = {
  title: "Modals/ListModal",
  component: ListModal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ListModal>

const ExampleList = () => (
  <div className="flex flex-col gap-4 p-4">
    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        style={{
          padding: "16px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      >
        List Item {i + 1}
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    title: "Team Status",
    isOpen: true,
    dropdownItems: [
      {
        label: "Edit",
        icon: PencilIcon,
        onClick: () => {},
      },
      {
        label: "Delete",
        icon: DeleteIcon,
        onClick: () => {},
      },
    ],
    tabs: [
      {
        label: "Out of office",
        href: "#team-status",
      },
      {
        label: "Missing clock in",
        href: "#missing-clock-in",
      },
      {
        label: "Clocked in",
        href: "#clocked-in",
      },
      {
        label: "In a break",
        href: "#in-a-break",
      },
    ],
    children: <ExampleList />,
  },
}
