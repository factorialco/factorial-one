import { ApplicationFrame } from "@/experimental/exports"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import DeleteIcon from "@/icons/app/Delete"
import PencilIcon from "@/icons/app/Pencil"
import type { Meta, StoryObj } from "@storybook/react"
import { FC } from "react"
import { OneListModal } from "./OneListModal"

const meta: Meta<typeof OneListModal> = {
  title: "Modals/OneListModal",
  component: OneListModal,
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
type Story = StoryObj<typeof OneListModal>

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
        id: "out-of-office",
        label: "Out of office",
      },
      {
        id: "missing-clock-in",
        label: "Missing clock in",
      },
      {
        id: "clocked-in",
        label: "Clocked in",
      },
      {
        id: "in-a-break",
        label: "In a break",
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
      <OnePersonListItem
        key={i}
        {...(OnePersonListItemDefault.args as OnePersonListItemProps)}
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
