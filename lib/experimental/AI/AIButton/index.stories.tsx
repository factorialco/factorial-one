import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"
import type { Meta, StoryObj } from "@storybook/react"
import { AIButton } from "."
import { AIBox } from "../Popover"

const meta = {
  component: AIButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AIButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Automate",
    onClick: () => console.log("AI Button clicked"),
  },
}

export const WithPopover: Story = {
  args: {
    label: "Automate",
  },
  render: (args) => (
    <Popover>
      <PopoverTrigger>
        <AIButton {...args} />
      </PopoverTrigger>
      <PopoverContent
        className="m-0 h-fit w-fit rounded-none bg-transparent p-0 shadow-none"
        side="top"
        sideOffset={12}
        align="start"
      >
        <AIBox />
      </PopoverContent>
    </Popover>
  ),
}
