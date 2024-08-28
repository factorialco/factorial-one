import { Button } from "@/components/Actions/Button"
import type { Meta, StoryObj } from "@storybook/react"
import { ActionToolbar } from "./"

const meta = {
  component: ActionToolbar,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Button variant="secondary" label="Discard" />
        <Button label="Save changes" />
      </>
    ),
    isVisible: true,
  },
  decorators: [
    (Story) => (
      <>
        <div className="max-h-[600px] space-y-4 overflow-y-scroll bg-muted">
          {[...Array(60)].map((_, index) => (
            <p key={index} className="text-muted-foreground">
              This is some dummy content to demonstrate scrolling.
            </p>
          ))}
        </div>
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof ActionToolbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
