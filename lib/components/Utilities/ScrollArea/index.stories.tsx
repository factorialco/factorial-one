import { Button } from "@/components/Actions/Button"
import { ScrollArea } from "."

import { Stack } from "@/components/Layout/Layout/Stack"
import { Placeholder } from "@/lib/storybook-utils"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (props) => (
    <Stack overflow="hidden" className="h-96">
      <ScrollArea {...props}>
        <Stack gap="4">
          <Button
            label="Some button"
            onClick={() =>
              alert(
                "This button is needed so the content can be focused for accessibility purposes."
              )
            }
          />
          {Array.from({ length: 20 }).map((_, i) => (
            <Placeholder key={i}>
              Element {i + 1} in a scrollable placeholder
            </Placeholder>
          ))}
        </Stack>
      </ScrollArea>
    </Stack>
  ),
}
