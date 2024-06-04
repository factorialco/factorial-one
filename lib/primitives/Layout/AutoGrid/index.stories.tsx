import type { Meta, StoryObj } from "@storybook/react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Blocks/Card"
import { Placeholder } from "@/lib/storybook-utils"
import { AutoGrid } from "."

const meta = {
  component: AutoGrid,
  tags: ["autodocs"],
  args: {
    tileSize: "md",
    gap: "4",
    children: (
      <>
        {Array.from({ length: 48 }).map((_, i) => (
          <Placeholder key={i}>{i + 1}</Placeholder>
        ))}
      </>
    ),
  },
} satisfies Meta<typeof AutoGrid>

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

export const Medium: Story = {
  args: {
    tileSize: "md",
  },
}

export const Large: Story = {
  args: {
    tileSize: "lg",
  },
}

export const CardGrid: Story = {
  render: (args) => (
    <AutoGrid {...args}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>A card's title</CardTitle>
          </CardHeader>
          <CardContent>
            <Placeholder>Card content</Placeholder>
          </CardContent>
        </Card>
      ))}
    </AutoGrid>
  ),
}
