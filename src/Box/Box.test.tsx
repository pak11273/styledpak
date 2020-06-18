import Box from "./Box"
import { BoxProps } from "./Box.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: BoxProps

  beforeEach(() => {
    props = {
      foo: "bar",
    }
  })

  const renderComponent = () => render(<Box {...props} />)

  it("should render a box", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
