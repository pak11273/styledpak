import Box from "./Box"
// import { BoxProps } from "./Box.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  // let props: BoxProps

  const renderComponent = () => render(<Box />)

  it("should render a box", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
