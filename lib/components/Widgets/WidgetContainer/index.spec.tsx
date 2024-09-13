import { render, screen } from "@testing-library/react"
import { Fragment } from "react"
import { expect, test } from "vitest"
import { WidgetContainer } from "."

const renderWidgetContainer = () => {
  return render(
    <WidgetContainer>
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
    </WidgetContainer>
  )
}

test("only valid elements are rendered", async () => {
  renderWidgetContainer()

  const paragraphs = screen.getAllByText(/.+/)
  expect(paragraphs).toHaveLength(3)
})

test("there is one separator between each valid element", async () => {
  renderWidgetContainer()

  const separators = screen.queryAllByRole("separator")
  expect(separators).toHaveLength(2)
})
