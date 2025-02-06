import type { Meta, StoryObj } from "@storybook/react"

import { DetailsItem } from "."

const meta: Meta = {
  title: "DetailsItem",
  component: DetailsItem,
  parameters: {
    tags: ["autodocs", "alpha"],
  },
  args: {
    title: "Email",
    content: {
      type: "item",
      text: "alicia.keys@factorial.co",
      action: {
        type: "copy",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLongText: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
      action: {
        type: "copy",
      },
    },
  },
}

export const WithMoreLinesThanAllowed: Story = {
  args: {
    title: "Address",
    content: {
      type: "item",
      text: "Paseo Mara, 62, Bajos\nPáez del Vallès\nCeuta\nPaseo Mara, 62, Bajos\nPáez del Vallès\nCeuta",
      action: {
        type: "copy",
      },
    },
  },
}
