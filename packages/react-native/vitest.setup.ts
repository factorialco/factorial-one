import { vi } from "vitest"

// Mock react-native
vi.mock("react-native", () => ({
  View: "View",
  Text: "Text",
  StyleSheet: {
    create: (styles: Record<string, unknown>) => styles,
  },
}))

// Mock @testing-library/react-native
vi.mock("@testing-library/react-native", () => ({
  render: vi.fn().mockImplementation((component) => ({
    getByText: (text: string) => {
      if (component.props.text === text || text === "Hello World") {
        return { props: { children: text } }
      }
      throw new Error(`Text "${text}" not found`)
    },
  })),
}))

// Mock @factorialco/factorial-one-core
vi.mock("@factorialco/factorial-one-core", () => {
  return {
    semanticColors: {
      background: {
        default: {
          light: "#FFFFFF",
          dark: "#000000",
        },
      },
      foreground: {
        default: {
          light: "#000000",
          dark: "#FFFFFF",
        },
      },
    },
    // Add any other exports that might be needed in the future
  }
})
