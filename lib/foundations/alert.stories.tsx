import type { Meta, StoryObj } from "@storybook/react"

import { Alert, AlertDescription, AlertTitle } from "./alert"

import { BookOpen, CircleCheck, OctagonX, TriangleAlert } from "lucide-react"

const meta = {
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Destructive: Story = {
  render: () => {
    return (
      <Alert variant="destructive" className="max-w-80">
        <OctagonX size={20} />
        <AlertTitle>Critical system error</AlertTitle>
        <AlertDescription>
          System issue detected. Act immediately to prevent data loss.
        </AlertDescription>
      </Alert>
    )
  },
}

export const Positive: Story = {
  render: () => {
    return (
      <Alert variant="positive" className="max-w-80">
        <CircleCheck size={20} />
        <AlertTitle>Training completed!</AlertTitle>
        <AlertDescription>
          You successfully completed the training ‘Eat. Sleep. Command Z.
          Repeat’.
        </AlertDescription>
      </Alert>
    )
  },
}

export const Warning: Story = {
  render: () => {
    return (
      <Alert variant="warning" className="max-w-80">
        <TriangleAlert size={20} />
        <AlertTitle>Top up account</AlertTitle>
        <AlertDescription>
          Your account balance is below 1.000,00 €. Add money to your balance in
          order to avoid failed card payments immediately.
        </AlertDescription>
      </Alert>
    )
  },
}

export const Info: Story = {
  render: () => {
    return (
      <Alert variant="info" className="max-w-80">
        <BookOpen size={20} />
        <AlertTitle>Invite your Bookkeeper</AlertTitle>
        <AlertDescription>
          You can now invite your Bookkeeper to centralize all types of
          communications about employee updates in one place.
        </AlertDescription>
      </Alert>
    )
  },
}
