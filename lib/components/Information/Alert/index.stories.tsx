import type { Meta, StoryObj } from "@storybook/react"

import { Alert, AlertDescription, AlertTitle } from "."

import { BookOpen, CircleCheck, OctagonX, TriangleAlert } from "lucide-react"

const meta = {
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (props) => (
    <Alert {...props}>
      <OctagonX size={20} />
      <AlertTitle>Critical system error</AlertTitle>
      <AlertDescription>
        System issue detected. Act immediately to prevent data loss.
      </AlertDescription>
    </Alert>
  ),
}

export const Positive: Story = {
  args: {
    variant: "positive",
  },
  render: (props) => (
    <Alert {...props}>
      <CircleCheck size={20} />
      <AlertTitle>Training completed!</AlertTitle>
      <AlertDescription>
        You successfully completed the training ‘Eat. Sleep. Command Z. Repeat’.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
  render: (props) => (
    <Alert {...props}>
      <TriangleAlert size={20} />
      <AlertTitle>Top up account</AlertTitle>
      <AlertDescription>
        Your account balance is below 1.000,00 €. Add money to your balance in
        order to avoid failed card payments immediately.
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  args: {
    variant: "info",
    children: (
      <>
        <BookOpen size={20} />
        <AlertTitle>Invite your Bookkeeper</AlertTitle>
        <AlertDescription>
          You can now invite your Bookkeeper to centralize all types of
          communications about employee updates in one place.
        </AlertDescription>
      </>
    ),
  },
  render: (props) => (
    <Alert {...props}>
      <BookOpen size={20} />
      <AlertTitle>Invite your Bookkeeper</AlertTitle>
      <AlertDescription>
        You can now invite your Bookkeeper to centralize all types of
        communications about employee updates in one place.
      </AlertDescription>
    </Alert>
  ),
}
