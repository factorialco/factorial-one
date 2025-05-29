import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { ProductBlankslate } from "./index"

import ChartLine from "@/icons/app/ChartLine"
import Target from "@/icons/app/Target"
import { Trainings } from "@/icons/modules"

const meta: Meta<typeof ProductBlankslate> = {
  title: "UpsellingKit/ProductBlankslate",
  component: ProductBlankslate,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isVisible: true,
    backgroundImage: "https://screenshots.codesandbox.io/1k3lm/108.png",
    icon: Trainings,
    title: "Take your team's skills to the next levels",
    description:
      "Activate Trainings to create engaging sessions and track real progress!",
    actions: [
      {
        label: "Learn more",
        onClick: () => {
          alert("clicked")
        },
        variant: "outline",
      },
      {
        type: "upsell",
        label: "Request Information",
        errorMessage: {
          title: "Request failed",
          description:
            "We couldn't process your request. Please try again later.",
        },
        onClick: async () => {
          console.log("onRequest")
          await new Promise((resolve) => setTimeout(resolve, 1000))
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
    ],
  },
  tags: ["autodocs", "experimental"],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify component renders correctly", async () => {
      // Check that the title is visible
      await expect(canvas.getByText("Benefits")).toBeInTheDocument()

      // Check that the description is visible
      await expect(
        canvas.getByText(/Improve your team's salary/)
      ).toBeInTheDocument()

      // Check that both buttons are present
      await expect(
        canvas.getByRole("button", { name: "Learn more" })
      ).toBeInTheDocument()
      await expect(
        canvas.getByRole("button", { name: "Request information" })
      ).toBeInTheDocument()
    })

    await step("Test button interactions", async () => {
      const primaryButton = canvas.getByRole("button", { name: "Learn more" })
      const secondaryButton = canvas.getByRole("button", {
        name: "Request information",
      })

      // Test primary button click
      await userEvent.click(primaryButton)

      // Test secondary button click
      await userEvent.click(secondaryButton)
    })

    await step("Verify background image is applied", async () => {
      const backgroundElement = canvasElement.querySelector(
        '[style*="background-image"]'
      )
      await expect(backgroundElement).toBeInTheDocument()
    })
  },
}

export const Training: Story = {
  args: {
    ...Default.args,
    icon: Target,
    title: "Trainings",
    description:
      "Manage your trainings with our module to unlock this section.",
    backgroundImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
}

export const Performance: Story = {
  args: {
    ...Default.args,
    icon: ChartLine,
    title: "Performance",
    description:
      "Track and improve your team's performance with advanced analytics and insights.",
    backgroundImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
}

export const Hidden: Story = {
  args: {
    ...Default.args,
    isVisible: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify component is not rendered when hidden", async () => {
      // Should not find the title when component is hidden
      await expect(canvas.queryByText("Benefits")).not.toBeInTheDocument()
    })
  },
}
