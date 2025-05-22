import { Meta, StoryObj } from "@storybook/react"
import { ProductWidget } from "."

const meta: Meta<typeof ProductWidget> = {
  title: "UpsellingKit/ProductWidget",
  component: ProductWidget,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mediaUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
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
  tags: ["autodocs", "experimental"],
}
