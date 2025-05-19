import { Meta, StoryObj } from "@storybook/react"
import ProductWidget from "."

const meta: Meta<typeof ProductWidget> = {
  title: "UpsellingKit/ProductWidget",
  component: ProductWidget,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    imageUrl: "https://placehold.co/300x160",
    title: "More benefits to René & your team",
    description:
      "Enjoy greater savings through flexible benefits like meals, transport, and health insurance.",
    buttonText: "Learn more",
    onClick: () => {
      alert("clicked")
    },
    onClose: () => {
      alert("dismissed")
    },
    dismissible: true,
    width: "300px",
  },
}
