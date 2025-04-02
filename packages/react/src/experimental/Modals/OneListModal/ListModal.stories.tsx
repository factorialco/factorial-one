import { ApplicationFrame } from "@/experimental/exports"
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
  decorators: [
    (Story) => (
      <ApplicationFrame sidebar={null}>
        <Story />
      </ApplicationFrame>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ListModal>

const ExampleList = () => (
  <div className="flex flex-col gap-4 p-4">
    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="rounded-sm border border-solid border-f1-border-secondary p-4"
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
    setIsOpen: () => {},
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
