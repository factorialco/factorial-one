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
