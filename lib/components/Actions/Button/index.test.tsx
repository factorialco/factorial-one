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
