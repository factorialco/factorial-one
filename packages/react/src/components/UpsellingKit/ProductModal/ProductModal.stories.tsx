import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories"
import UpsellIcon from "@/icons/app/Upsell"
import SalesIcon from "@/icons/modules/Sales"
import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { ProductModal } from "./index"

const meta = {
  title: "UpsellingKit/ProductModal",
  component: ProductModal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ApplicationFrame
        {...(ApplicationFrameStoryMeta.args as ComponentProps<
          typeof ApplicationFrame
        >)}
      >
        <div className="flex-1 rounded-md border border-solid border-f1-border-secondary bg-f1-background">
          <Story />
        </div>
      </ApplicationFrame>
    ),
  ],
} satisfies Meta<typeof ProductModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    modalTitle: "Sales invoices",
    modalIcon: SalesIcon,
    title: "Boost your team's salary without impacting your budget",
    image: "https://placehold.co/280x300", // 3:4 ratio
    benefits: [
      "Offer flexible compensation to boost take-home pay.",
      "Centralize and automate all benefits in one place.",
      "Sync benefits with payroll to save time.",
      "Track usage with real-time insights for better decisions.",
    ],
    primaryAction: {
      label: "Request information",
      onClick: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      },
      icon: UpsellIcon,
      variant: "promote",
    },
    secondaryAction: {
      label: "Learn more",
      onClick: () => {},
      variant: "outline",
    },
    errorMessage: {
      title: "Request failed",
      description: "We couldn't process your request. Please try again later.",
    },
    successMessage: {
      title: "Request submitted!",
      description:
        "One of our experts will contact you as soon as possible with all the details.",
      buttonLabel: "Discover more products",
      buttonOnClick: () => {
        console.log("buttonOnClick")
      },
    },
    loadingState: {
      label: "Processing...",
    },
    nextSteps: {
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
    },
    closeLabel: "Close",
  },
  render: (args) => <ProductModal {...args} />,
}
