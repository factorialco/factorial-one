import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { I18nProvider, useI18n } from "./i18n-provider"

// Test component that uses the i18n hook
function TestComponent() {
  const i18n = useI18n()
  return <div data-testid="translation">{i18n.save}</div>
}

describe("I18nProvider", () => {
  it("provides default translations", () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    )

    expect(screen.getByTestId("translation")).toHaveTextContent("Save")
  })

  it("allows overriding translations", () => {
    const customTranslations = {
      save: "Guardar",
    }

    render(
      <I18nProvider translations={customTranslations}>
        <TestComponent />
      </I18nProvider>
    )

    expect(screen.getByTestId("translation")).toHaveTextContent("Guardar")
  })

  it("throws error when useI18n is used outside provider", () => {
    // Suppress console.error for this test as we expect an error
    const consoleSpy = vi.spyOn(console, "error")
    consoleSpy.mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow("useI18n must be used within an I18nProvider")

    consoleSpy.mockRestore()
  })

  // Type tests - these will fail at compile time if types are wrong
  it.skip("maintains type safety for translation overrides", () => {
    render(
      // @ts-expect-error - Invalid translation key should be caught by TypeScript
      <I18nProvider translations={{ invalidKey: "test" }}>
        <div />
      </I18nProvider>
    )

    render(
      // @ts-expect-error - Missing required translation keys should be caught by TypeScript
      <I18nProvider translations={{}}>
        <div />
      </I18nProvider>
    )
  })
})
