import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { OnePagination } from "."

const meta: Meta<typeof OnePagination> = {
  component: OnePagination,
  title: "Pagination",
  parameters: {
    layout: "centered",
  },
  args: {
    totalPages: 10,
    currentPage: 1,
    showControls: true,
  },
  argTypes: {
    totalPages: {
      description: "The total number of pages",
      control: false,
    },
    currentPage: {
      description: "The current page",
      defaultValue: { summary: 1 },
      control: false,
    },
    onPageChange: {
      description: "The callback function to handle page change",
      control: false,
    },
    showControls: {
      description: "Whether to show the controls",
      defaultValue: { summary: true },
      control: false,
    },
    ariaLabel: {
      description: "Accessible label for the pagination navigation",
      defaultValue: { summary: "Page navigation" },
      control: false,
    },
  },
  tags: ["autodocs", "experimental"],
}

export default meta
type Story = StoryObj<typeof OnePagination>

export const Default: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <OnePagination
        totalPages={10}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const LongList: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    return (
      <OnePagination
        totalPages={100}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    )
  },
}

export const WithoutControls: Story = {
  args: {
    totalPages: 10,
    showControls: false,
  },
}
