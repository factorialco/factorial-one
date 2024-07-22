// Replace your-framework with the name of your framework
import { Button } from "@/components/Actions/Button"
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
      <Stack grow gap="4" className="h-full overflow-hidden">
        <Split gap="4" alignItems={"center"}>
          <Placeholder grow>Header</Placeholder>
          <Split gap="2" justifyContent="center" alignItems={"center"}>
            <Button label="Create" icon="add" variant="default" />
            <Button
              hideLabel
              label="Options"
              icon="ellipsis"
              variant="secondary"
            />
          </Split>
        </Split>
        <Placeholder grow overflow="auto" className="h-full">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i}>Content</div>
          ))}
        </Placeholder>
      </Stack>
    </Split>
  ),
}

export default meta
