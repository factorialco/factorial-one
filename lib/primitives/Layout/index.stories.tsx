// Replace your-framework with the name of your framework
import { Button } from "@/components"
import { Ellipsis, Plus } from "@/lib/icons"
import { Placeholder } from "@/lib/storybook-utils"
import type { Meta, StoryObj } from "@storybook/react"
import { Split } from "./Split"
import { Stack } from "./Stack"

const meta: Meta = {
  decorators: [
    (Story) => (
      <div className="flex h-screen w-screen p-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
}

type Story = StoryObj

export const Example: Story = {
  render: () => (
    <Split grow gap="4">
      <Placeholder>Sidebar</Placeholder>
      <Stack grow gap="4">
        <Split gap="4" verticalAlign={"center"}>
          <Placeholder grow>Header</Placeholder>
          <Split gap="2">
            <Button label="Create" icon={Plus} variant="default" />
            <Button
              hideLabel
              label="Options"
              icon={Ellipsis}
              variant="secondary"
            />
          </Split>
        </Split>
        <Placeholder grow>Content</Placeholder>
      </Stack>
    </Split>
  ),
}

export default meta
