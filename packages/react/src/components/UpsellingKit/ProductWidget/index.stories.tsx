import { Button, UpsellingButton } from "@/components/exports"
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
    actions: (
      <Button
        label="Learn more"
        onClick={() => {
          alert("clicked")
        }}
      />
    ),
  },
  tags: ["autodocs", "experimental"],
}
export const WithUpsellingButton: Story = {
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
    actions: (
      <UpsellingButton
        label="Request information"
        onRequest={async () =>
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        errorMessage={{
          title: "Request failed",
          description:
            "We couldn't process your request. Please try again later.",
        }}
        successMessage={{
          title: "Request submitted!",
          description:
            "One of our experts will contact you as soon as possible with all the details.",
          buttonLabel: "Discover more products",
          buttonOnClick: () => {
            console.log("buttonOnClick")
          },
        }}
        loadingState={{
          label: "Processing...",
        }}
        nextSteps={{
          title: "Next steps",
          items: [
            {
              text: "Request information",
              isCompleted: true,
            },
            {
              text: "Product expert contacting you.",
            },
            {
              text: "Demo to answer all your questions",
            },
          ],
        }}
        closeLabel="Close"
      />
    ),
  },
  tags: ["autodocs", "experimental"],
}
