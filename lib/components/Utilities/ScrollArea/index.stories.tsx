import { Button } from "@/components/Actions/Button"
import { ScrollArea } from "."

import { Alert, AlertTitle } from "@/components/Information/Alert"
import { Split } from "@/components/Layout/Split"
import { Stack } from "@/components/Layout/Stack"
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
    <Stack className="h-96" overflow={`hidden`} gap="4">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </Stack>
  ),
}

export const Horizontal: Story = {
  args: {},
  render: (props) => (
    <Stack className="w-48" overflow={`hidden`} gap="4">
      <ScrollArea {...props}>
        <StackWithOverflow length={4} />
      </ScrollArea>
    </Stack>
  ),
}

export const Both: Story = {
  args: {},
  render: (props) => (
    <Stack className="h-96 w-48" overflow={`hidden`} gap="4">
      <ScrollArea {...props}>
        <StackWithOverflow />
      </ScrollArea>
    </Stack>
  ),
}

export const Comparison: Story = {
  args: {},
  render: (props) => (
    <Split className="h-96" gap={"8"}>
      <Stack className="h-full" overflow={`hidden`} gap="4">
        <Alert variant="positive">
          <AlertTitle>New ScrollArea Component</AlertTitle>
        </Alert>
        <ScrollArea {...props}>
          <StackWithOverflow />
        </ScrollArea>
      </Stack>
      <Stack className="h-full" overflow={`hidden`} gap="4">
        <Alert variant="warning">
          <AlertTitle>Default ScrollBar</AlertTitle>
        </Alert>
        <Stack overflow={`auto`}>
          <StackWithOverflow />
        </Stack>
      </Stack>
    </Split>
  ),
}

const StackWithOverflow = ({ length = 20 }: { length?: number }) => (
  <Stack gap="4" className="w-96">
    <Button
      label="Some button"
      onClick={() =>
        alert(
          "This button is needed so the content can be focused for accessibility purposes."
        )
      }
    />
    {Array.from({ length }).map((_, i) => (
      <Placeholder key={i}>
        Element {i + 1} in a scrollable placeholder
      </Placeholder>
    ))}
  </Stack>
)
