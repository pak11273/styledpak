import Div from "./Div"
import { DivProps } from "./Div.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  const renderComponent = () => render(<Div />)

  it("should render a div", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
