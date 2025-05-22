/* eslint-disable no-constant-binary-expression */
import { I18nProvider } from "@/lib/providers/i18n"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import { render, screen } from "@testing-library/react"
import { Fragment } from "react"
import { expect, test } from "vitest"
import { Widget } from "./index"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const renderWidget = () => {
  return render(
    <TestWrapper>
      <Widget>
        <></>
        <Fragment></Fragment>
        {false && <p>asd</p>}
        {null}
        {undefined}
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <></>
        <Fragment></Fragment>
        {false && <p>asd</p>}
        {null}
        {undefined}
      </Widget>
    </TestWrapper>
  )
}

test("only valid elements are rendered", async () => {
  renderWidget()

  const paragraphs = screen.getAllByText(/.+/)
  expect(paragraphs).toHaveLength(3)
})

test("there is one separator between each valid element", async () => {
  renderWidget()

  const separators = screen.queryAllByRole("separator")
  expect(separators).toHaveLength(2)
})
