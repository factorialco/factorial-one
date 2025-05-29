import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { ProductBlankslate, ProductBlankslateProps } from "./index"

import ChartLine from "@/icons/app/ChartLine"
import Target from "@/icons/app/Target"
import { Trainings } from "@/icons/modules"

vi.mock("@/experimental/Information/ModuleAvatar", () => ({
  ModuleAvatar: ({ icon, size }: { icon: any; size: string }) => (
    <div data-testid="module-avatar" data-icon={icon.name} data-size={size} />
  ),
}))

vi.mock("@/factorial-one", () => ({
  Button: ({ label, onClick, variant }: any) => (
    <button onClick={onClick} data-variant={variant}>
      {label}
    </button>
  ),
  UpsellingButton: ({ label, onRequest }: any) => (
    <button onClick={onRequest} data-testid="upselling-button">
      {label}
    </button>
  ),
}))

describe("ProductBlankslate", () => {
  const mockOnClick = vi.fn()
  const mockOnRequest = vi.fn()

  const defaultProps: ProductBlankslateProps = {
    isVisible: true,
    backgroundImage: "https://example.com/background.jpg",
    icon: Trainings,
    title: "Test Title",
    description: "Test Description",
    actions: [
      {
        type: "regular",
        label: "Learn more",
        onClick: mockOnClick,
        variant: "outline",
      },
      {
        type: "upsell",
        label: "Request Information",
        onClick: mockOnRequest,
        errorMessage: {
          title: "Request failed",
          description: "Please try again later.",
        },
        successMessage: {
          title: "Request submitted!",
          description: "We'll contact you soon.",
          buttonLabel: "Discover more",
          buttonOnClick: vi.fn(),
        },
        loadingState: {
          label: "Processing...",
        },
        nextSteps: {
          title: "Next steps",
          items: [
            { text: "Request information", isCompleted: true },
            { text: "Product expert contacting you." },
          ],
        },
        closeLabel: "Close",
        showConfirmation: true,
      },
    ],
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("Rendering", () => {
    it("renders the component with all elements when visible", () => {
      render(<ProductBlankslate {...defaultProps} />)

      expect(screen.getByText("Test Title")).toBeInTheDocument()
      expect(screen.getByText("Test Description")).toBeInTheDocument()
      expect(screen.getByText("Learn more")).toBeInTheDocument()
      expect(screen.getByText("Request Information")).toBeInTheDocument()
      expect(screen.getByTestId("module-avatar")).toBeInTheDocument()
    })

    it("does not render when isVisible is false", () => {
      render(<ProductBlankslate {...defaultProps} isVisible={false} />)

      expect(screen.queryByText("Test Title")).not.toBeInTheDocument()
      expect(screen.queryByText("Test Description")).not.toBeInTheDocument()
    })

    it("renders with default isVisible value (true)", () => {
      const { isVisible, ...propsWithoutVisible } = defaultProps
      render(<ProductBlankslate {...propsWithoutVisible} />)

      expect(screen.getByText("Test Title")).toBeInTheDocument()
    })

    it("applies background image styles correctly", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const backgroundElement = document.querySelector(
        '[style*="background-image"]'
      )
      expect(backgroundElement).toBeInTheDocument()
      expect(backgroundElement).toHaveStyle(
        `background-image: url(${defaultProps.backgroundImage})`
      )
    })

    it("renders ModuleAvatar with correct props", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const avatar = screen.getByTestId("module-avatar")
      expect(avatar).toHaveAttribute("data-size", "lg")
    })
  })

  describe("Actions", () => {
    it("renders regular action buttons with correct variants", () => {
      const propsWithRegularActions: ProductBlankslateProps = {
        ...defaultProps,
        actions: [
          {
            type: "regular",
            label: "Primary Action",
            onClick: mockOnClick,
            variant: "default",
          },
          {
            type: "regular",
            label: "Secondary Action",
            onClick: mockOnClick,
            variant: "outline",
          },
        ],
      }

      render(<ProductBlankslate {...propsWithRegularActions} />)

      const primaryButton = screen.getByText("Primary Action")
      const secondaryButton = screen.getByText("Secondary Action")

      expect(primaryButton).toHaveAttribute("data-variant", "default")
      expect(secondaryButton).toHaveAttribute("data-variant", "outline")
    })

    it("renders upselling buttons correctly", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const upsellingButton = screen.getByTestId("upselling-button")
      expect(upsellingButton).toBeInTheDocument()
      expect(upsellingButton).toHaveTextContent("Request Information")
    })

    it("handles multiple actions correctly", () => {
      const multipleActionsProps: ProductBlankslateProps = {
        ...defaultProps,
        actions: [
          {
            type: "regular",
            label: "Action 1",
            onClick: vi.fn(),
            variant: "default",
          },
          {
            type: "regular",
            label: "Action 2",
            onClick: vi.fn(),
            variant: "outline",
          },
          {
            type: "upsell",
            label: "Upsell Action",
            onClick: vi.fn(),
            errorMessage: { title: "Error", description: "Error desc" },
            successMessage: {
              title: "Success",
              description: "Success desc",
              buttonLabel: "Continue",
              buttonOnClick: vi.fn(),
            },
            loadingState: { label: "Loading..." },
            nextSteps: { title: "Steps", items: [] },
            closeLabel: "Close",
            showConfirmation: true,
          },
        ],
      }

      render(<ProductBlankslate {...multipleActionsProps} />)

      expect(screen.getByText("Action 1")).toBeInTheDocument()
      expect(screen.getByText("Action 2")).toBeInTheDocument()
      expect(screen.getByText("Upsell Action")).toBeInTheDocument()
    })
  })

  describe("User Interactions", () => {
    it("calls onClick handler when regular action button is clicked", async () => {
      const user = userEvent.setup()
      render(<ProductBlankslate {...defaultProps} />)

      const button = screen.getByText("Learn more")
      await user.click(button)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it("calls onRequest handler when upselling button is clicked", async () => {
      const user = userEvent.setup()
      render(<ProductBlankslate {...defaultProps} />)

      const button = screen.getByTestId("upselling-button")
      await user.click(button)

      expect(mockOnRequest).toHaveBeenCalledTimes(1)
    })

    it("handles async onClick functions", async () => {
      const asyncOnClick = vi.fn().mockResolvedValue(undefined)
      const propsWithAsyncAction: ProductBlankslateProps = {
        ...defaultProps,
        actions: [
          {
            type: "regular",
            label: "Async Action",
            onClick: asyncOnClick,
            variant: "default",
          },
        ],
      }

      const user = userEvent.setup()
      render(<ProductBlankslate {...propsWithAsyncAction} />)

      const button = screen.getByText("Async Action")
      await user.click(button)

      await waitFor(() => {
        expect(asyncOnClick).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("Different Icon Types", () => {
    it("renders with Target icon", () => {
      render(<ProductBlankslate {...defaultProps} icon={Target} />)

      const avatar = screen.getByTestId("module-avatar")
      expect(avatar).toBeInTheDocument()
    })

    it("renders with ChartLine icon", () => {
      render(<ProductBlankslate {...defaultProps} icon={ChartLine} />)

      const avatar = screen.getByTestId("module-avatar")
      expect(avatar).toBeInTheDocument()
    })

    it("renders with Trainings icon", () => {
      render(<ProductBlankslate {...defaultProps} icon={Trainings} />)

      const avatar = screen.getByTestId("module-avatar")
      expect(avatar).toBeInTheDocument()
    })
  })

  describe("Content Variations", () => {
    it("renders with long title and description", () => {
      const longContentProps: ProductBlankslateProps = {
        ...defaultProps,
        title: "This is a very long title that should still render properly",
        description:
          "This is a very long description that provides detailed information about the product and its benefits for the user's workflow",
      }

      render(<ProductBlankslate {...longContentProps} />)

      expect(
        screen.getByText(
          "This is a very long title that should still render properly"
        )
      ).toBeInTheDocument()
      expect(
        screen.getByText(
          /This is a very long description that provides detailed/
        )
      ).toBeInTheDocument()
    })

    it("renders with minimal content", () => {
      const minimalProps: ProductBlankslateProps = {
        ...defaultProps,
        title: "Title",
        description: "Desc",
        actions: [],
      }

      render(<ProductBlankslate {...minimalProps} />)

      expect(screen.getByText("Title")).toBeInTheDocument()
      expect(screen.getByText("Desc")).toBeInTheDocument()
    })
  })

  describe("Layout and Styling", () => {
    it("applies correct container styling", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const container = document.querySelector(".relative.flex.w-full")
      expect(container).toBeInTheDocument()
      expect(container).toHaveStyle("height: 100cqh")
    })

    it("applies background blur effect", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const backgroundElement = document.querySelector(
        '[style*="filter: blur(4px)"]'
      )
      expect(backgroundElement).toBeInTheDocument()
    })

    it("has proper z-index layering for content overlay", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const contentOverlay = document.querySelector(".relative.z-10")
      expect(contentOverlay).toBeInTheDocument()
    })
  })

  describe("Accessibility", () => {
    it("has proper heading hierarchy", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const heading = screen.getByRole("heading", { level: 1 })
      expect(heading).toHaveTextContent("Test Title")
    })

    it("provides accessible button labels", () => {
      render(<ProductBlankslate {...defaultProps} />)

      const buttons = screen.getAllByRole("button")
      buttons.forEach((button) => {
        expect(button).toHaveAccessibleName()
      })
    })
  })
})
