import type { Meta, StoryObj } from "@storybook/react"

import { CardContent, CardHeader, CardTitle } from "@/components"
import { faker } from "@faker-js/faker"
import { CardList } from "."

interface Element {
  title: string
  description: string
}

const elements: Element[] = Array.from({ length: 12 }, () => ({
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
}))

const Component = CardList<Element>

const meta = {
  component: Component,
  tags: ["autodocs"],
  args: {
    elements,
    children: ({ title, description }) => (
      <>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </>
    ),
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Small: Story = {
  args: {
    tileSize: "sm",
  },
}

export const Large: Story = {
  args: {
    tileSize: "lg",
  },
}
