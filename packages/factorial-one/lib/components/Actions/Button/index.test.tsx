import Add from "@/icons/app/Add"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Button } from "."

test("Button calls the `onClick` handler when clicked", async () => {
  const onClick = vi.fn()

  render(<Button label="Click me" onClick={() => onClick()} />)

  const button = screen.getByRole("button")
  await userEvent.click(button)
  expect(onClick).toHaveBeenCalled()
})

test("Button is temporarily disabled when onClick is a promise until the promise resolves", async () => {
  const onClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 100))
    vi.fn()
  }

  render(<Button label="Click me" onClick={() => onClick()} />)

  const button = screen.getByRole("button", { name: "Click me" })
  await userEvent.click(button)

  expect(button.attributes.getNamedItem("disabled")).not.toBeNull()
  await new Promise((resolve) => setTimeout(resolve, 100))
  expect(button.attributes.getNamedItem("disabled")).toBeNull()
})

test("Button renders with icon", () => {
  render(<Button label="Add Item" icon={Add} />)
  const button = screen.getByRole("button")
  const svg = button.querySelector("svg")
  expect(svg).toBeInTheDocument()
  expect(screen.getByText("Add Item")).toBeInTheDocument()
})

test("Button renders as icon-only when hideLabel is true", () => {
  render(<Button label="Add Item" icon={Add} hideLabel round />)
  const button = screen.getByRole("button")
  const svg = button.querySelector("svg")
  expect(svg).toBeInTheDocument()
  expect(screen.queryByText("Add Item")).not.toBeInTheDocument()
  expect(button).toHaveAttribute("title", "Add Item")
})

test("Button shows loading state", () => {
  render(<Button label="Submit" loading />)
  expect(screen.getByRole("button")).toBeDisabled()
})

test("Button is disabled when disabled prop is true", () => {
  render(<Button label="Submit" disabled />)
  const button = screen.getByRole("button")
  expect(button).toBeDisabled()
})

test("Button handles async click with error", async () => {
  const onError = vi.fn()
  const onClick = async () => {
    throw new Error("Test error")
  }

  render(
    <Button
      label="Error Test"
      onClick={() => {
        onClick().catch(onError)
      }}
    />
  )

  const button = screen.getByRole("button")
  await userEvent.click(button)

  // Button should be enabled after error
  await new Promise((resolve) => setTimeout(resolve, 0))
  expect(button).not.toBeDisabled()
  expect(onError).toHaveBeenCalled()
})
