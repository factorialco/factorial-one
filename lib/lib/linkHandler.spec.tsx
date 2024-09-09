import { Link, LinkProvider } from "@/lib/linkHandler"
import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

test("allows LinkProvider to change the component", async () => {
  render(
    <LinkProvider component={(props) => <a {...props} target="_blank" />}>
      <Link href="/">Test</Link>
    </LinkProvider>
  )

  const link = screen.getByRole("link")
  expect(link.getAttribute("target")).toEqual("_blank")
})
