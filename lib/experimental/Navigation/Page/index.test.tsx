import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { DaytimePage, Page } from "."

describe("Page", () => {
  it("renders children correctly", () => {
    render(
      <Page>
        <div>Test content</div>
      </Page>
    )
    expect(screen.getByText("Test content")).toBeInTheDocument()
  })

  it("renders header when provided", () => {
    render(
      <Page header={<div>Test header</div>}>
        <div>Test content</div>
      </Page>
    )
    expect(screen.getByText("Test header")).toBeInTheDocument()
    expect(screen.getByText("Test content")).toBeInTheDocument()
  })

  it("applies embedded styles correctly", () => {
    const { container } = render(
      <Page embedded>
        <div>Test content</div>
      </Page>
    )
    expect(container.firstChild).not.toHaveClass("rounded-xl")
  })
})

describe("DaytimePage", () => {
  it("renders children and header correctly", () => {
    render(
      <DaytimePage header={<div>Test header</div>}>
        <div>Test content</div>
      </DaytimePage>
    )
    expect(screen.getByText("Test header")).toBeInTheDocument()
    expect(screen.getByText("Test content")).toBeInTheDocument()
  })

  it("applies period variant styles correctly", () => {
    const { container } = render(
      <DaytimePage period="afternoon">
        <div>Test content</div>
      </DaytimePage>
    )
    const gradientElement = container.querySelector(
      "[class*='bg-gradient-to-bl']"
    )
    expect(gradientElement).toHaveClass("from-[#5596F6]")
  })

  it("applies embedded styles correctly", () => {
    const { container } = render(
      <DaytimePage embedded>
        <div>Test content</div>
      </DaytimePage>
    )
    expect(container.firstChild).not.toHaveClass("rounded-xl")
  })
})
