/* eslint-disable no-constant-binary-expression */
import { render, screen } from "@testing-library/react"
import { Fragment } from "react"
import { expect, test } from "vitest"
import { Widget } from "."

const renderWidget = () => {
  return render(
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
