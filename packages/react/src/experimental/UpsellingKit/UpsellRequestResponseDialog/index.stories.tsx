import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { UpsellingButton } from "../UpsellingButton"
import { UpsellRequestResponseDialog } from "./index"

const meta = {
  title: "UpsellingKit/UpsellRequestResponseDialog",
  component: UpsellRequestResponseDialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
  },
  args: {
    open: true,
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof UpsellRequestResponseDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithTrigger = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="flex h-full w-full items-center justify-center">
        <UpsellingButton
          label="Request Information"
          onClick={() => setIsOpen(true)}
        />
        <UpsellRequestResponseDialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    )
  },
}
