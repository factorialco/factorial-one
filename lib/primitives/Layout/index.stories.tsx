// Replace your-framework with the name of your framework
import { Button } from "@/components"
import { Placeholder } from "@/lib/storybook-utils"
import type { Meta, StoryObj } from "@storybook/react"
import { Split } from "./Split"
import { Stack } from "./Stack"

const meta: Meta = {}

type Story = StoryObj

export const Example: Story = {
  render: () => (
    <Split grow gap="4">
      <Placeholder>Sidebar</Placeholder>
      <Stack grow gap="4">
        <Split gap="4" verticalAlign={"center"}>
          <Placeholder grow>Header</Placeholder>
          <Split gap="2">
            <Button>Button 1</Button>
            <Button variant={"secondary"}>Button 1</Button>
          </Split>
        </Split>
        <Placeholder grow>Content</Placeholder>
      </Stack>
    </Split>
  ),
}

export default meta
