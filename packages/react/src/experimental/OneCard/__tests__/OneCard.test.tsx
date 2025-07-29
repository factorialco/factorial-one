import { render, screen } from "@/testing/test-utils"
import "@testing-library/jest-dom/vitest"
import userEvent from "@testing-library/user-event"
import React from "react"
import { describe, expect, it, vi } from "vitest"
import { defaultTranslations, I18nProvider } from "../../../lib/providers/i18n"
import type { CardSecondaryLink } from "../components/CardActions"
import { OneCard } from "../OneCard"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

describe("OneCard Component", () => {
  it("renders title and description correctly", () => {
    render(
      <TestWrapper>
        <OneCard title="Test Card Title" description="Test card description" />
      </TestWrapper>
    )

    expect(screen.getByText("Test Card Title")).toBeInTheDocument()
    expect(screen.getByText("Test card description")).toBeInTheDocument()
  })

  it("renders as a clickable card when link is provided", () => {
    render(
      <TestWrapper>
        <OneCard title="Linked Card" link="/test-link" />
      </TestWrapper>
    )

    const link = screen.getByRole("link", { name: "Linked Card" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test-link")
  })

  it("calls onClick when card is clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <TestWrapper>
        <OneCard title="Clickable Card" onClick={handleClick} />
      </TestWrapper>
    )

    await user.click(screen.getByText("Clickable Card"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("renders an image when provided", () => {
    render(
      <TestWrapper>
        <OneCard title="Image Card" image="/path/to/test-image.jpg" />
      </TestWrapper>
    )

    const image = screen.getByRole("img", { name: "Image Card" })
    expect(image).toHaveAttribute("src", "/path/to/test-image.jpg")
  })

  it("renders an avatar when provided", () => {
    render(
      <TestWrapper>
        <OneCard
          title="Avatar Card"
          avatar={{ type: "person", firstName: "Daniel", lastName: "Moreno" }}
        />
      </TestWrapper>
    )

    expect(screen.getByTestId("card-avatar")).toBeInTheDocument()
  })

  it("calls onSelect when the card is selected", async () => {
    const user = userEvent.setup()
    const handleSelect = vi.fn()

    render(
      <TestWrapper>
        <OneCard
          title="Selectable Card"
          selectable={true}
          onSelect={handleSelect}
        />
      </TestWrapper>
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    await user.hover(card)

    const selectionElement = screen.getByRole("checkbox")
    expect(selectionElement).toBeInTheDocument()

    await user.click(selectionElement)
    expect(handleSelect).toHaveBeenCalledWith(true)
  })

  it("handles dropdown actions", async () => {
    const user = userEvent.setup()
    const handleOption = vi.fn()

    const otherActions = [
      {
        label: "Edit",
        onClick: vi.fn(),
      },
      {
        label: "Delete",
        onClick: handleOption,
      },
    ]

    render(
      <TestWrapper>
        <OneCard title="Test Card" otherActions={otherActions} />
      </TestWrapper>
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()
    await user.hover(card)

    const dropdownTrigger = screen.getByTestId("card-options-dropdown")
    await user.click(dropdownTrigger)

    const deleteOption = screen.getByRole("menuitem", { name: "Delete" })
    await user.click(deleteOption)

    expect(handleOption).toHaveBeenCalledTimes(1)
  })

  it("handles primary action", async () => {
    const user = userEvent.setup()
    const handlePrimaryAction = vi.fn()

    render(
      <TestWrapper>
        <OneCard
          title="Test Card"
          primaryAction={{
            label: "Primary Action",
            onClick: handlePrimaryAction,
          }}
        />
      </TestWrapper>
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    const primaryButton = screen.getByRole("button", { name: "Primary Action" })
    expect(primaryButton).toBeInTheDocument()

    await user.click(primaryButton)
    expect(handlePrimaryAction).toHaveBeenCalledTimes(1)
  })

  it("renders a secondary action link", async () => {
    const user = userEvent.setup()
    const handleSecondaryAction = vi.fn()

    const secondaryLink: CardSecondaryLink = {
      label: "View more",
      href: "/test-page",
      target: "_blank",
      disabled: false,
    }

    render(
      <TestWrapper>
        <OneCard title="Test Card" secondaryActions={secondaryLink} />
      </TestWrapper>
    )

    const card = screen.getByTestId("card")
    expect(card).toBeInTheDocument()

    const linkElement = screen.getByRole("link", { name: "View more" })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute("href", "/test-page")
    expect(linkElement).toHaveAttribute("target", "_blank")
    expect(linkElement).not.toHaveAttribute("disabled")
  })
})
