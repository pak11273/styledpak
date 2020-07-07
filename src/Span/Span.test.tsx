import React from "react"
import Span from "./Span"
import { SpanProps } from "./Span.types"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  const renderComponent = () => render(<Span />)

  it("should render a div", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
