import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/ui/button"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "."

const meta = {
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render(props) {
    return (
      <Card {...props}>
        <CardContent>This is a basic card</CardContent>
      </Card>
    )
  },
}

export const WithTitle: Story = {
  render(props) {
    return (
      <Card {...props}>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Subtitle</CardSubtitle>
        </CardHeader>
        <CardContent>This is a card with a title</CardContent>
      </Card>
    )
  },
}

export const WithFooter: Story = {
  render(props) {
    return (
      <Card {...props}>
        <CardContent>This is a card with a footer</CardContent>
        <CardFooter>
          <Button className="w-full">Clock in</Button>
        </CardFooter>
      </Card>
    )
  },
}
