import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, within } from "@storybook/test"
import { ExampleTest } from "./index"

const meta = {
  component: ExampleTest,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleTest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Get the input fields
    const input1 = canvas.getByLabelText("Number 1")
    const input2 = canvas.getByLabelText("Number 2")
    const button = canvas.getByRole("button", { name: "Click me" })

    // Type numbers into the inputs
    await userEvent.type(input1, "5")
    await userEvent.type(input2, "3")

    // Click the button
    await userEvent.click(button)

    // Verify the result
    const result = canvas.getByText("Result: 8")
    await expect(result).toBeInTheDocument()
  },
}

export const NegativeNumbers: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input1 = canvas.getByLabelText("Number 1")
    const input2 = canvas.getByLabelText("Number 2")
    const button = canvas.getByRole("button", { name: "Click me" })

    // Test with negative numbers
    await userEvent.type(input1, "-10")
    await userEvent.type(input2, "-5")
    await userEvent.click(button)

    // Verify negative numbers addition
    const result = canvas.getByText("Result: -15")
    await expect(result).toBeInTheDocument()
  },
}

export const DecimalNumbers: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const input1 = canvas.getByLabelText("Number 1")
    const input2 = canvas.getByLabelText("Number 2")
    const button = canvas.getByRole("button", { name: "Click me" })

    // Test with decimal numbers
    await userEvent.type(input1, "3.14")
    await userEvent.type(input2, "2.86")
    await userEvent.click(button)

    // Verify decimal addition
    const result = canvas.getByText("Result: 6")
    await expect(result).toBeInTheDocument()
  },
}

export const EmptyInputs: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const button = canvas.getByRole("button", { name: "Click me" })

    // Click without entering any numbers
    await userEvent.click(button)

    // Verify default behavior with empty inputs (should be 0)
    const result = canvas.getByText("Result: 0")
    await expect(result).toBeInTheDocument()
  },
}

export const LargeNumbers: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Input large numbers", async () => {
      const input1 = canvas.getByLabelText("Number 1")
      const input2 = canvas.getByLabelText("Number 2")

      await userEvent.type(input1, "999999999")
      await userEvent.type(input2, "999999999")
    })

    await step("Calculate result", async () => {
      const button = canvas.getByRole("button", { name: "Click me" })
      await userEvent.click(button)

      const result = canvas.getByText("Result: 1999999998")
      await expect(result).toBeInTheDocument()
    })
  },
}
