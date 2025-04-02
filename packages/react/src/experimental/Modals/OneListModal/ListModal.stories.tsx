import { ApplicationFrame } from "@/experimental/exports"
import {
  PersonListItem,
  PersonListItemProps,
} from "@/experimental/Lists/PersonListItem"
import { Default as PersonListItemDefault } from "@/experimental/Lists/PersonListItem/index.stories"
import DeleteIcon from "@/icons/app/Delete"
import PencilIcon from "@/icons/app/Pencil"
import type { Meta, StoryObj } from "@storybook/react"
import { FC } from "react"
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

const ExamplePersonList: FC<{ numberOfItems?: number }> = ({
  numberOfItems = 20,
}) => (
  <div className="flex flex-col gap-0.5 p-2">
    {Array.from({ length: numberOfItems }, (_, i) => (
      <PersonListItem
        key={i}
        {...(PersonListItemDefault.args as PersonListItemProps)}
      />
    ))}
  </div>
)

export const WithPersonListItems: Story = {
  args: {
    ...Default.args,
    children: <ExamplePersonList />,
  },
}

export const WithFewItems: Story = {
  args: {
    ...Default.args,
    children: <ExamplePersonList numberOfItems={3} />,
  },
}
