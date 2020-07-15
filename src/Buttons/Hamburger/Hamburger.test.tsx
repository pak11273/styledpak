import { Hamburger } from "./Hamburger"
import { HamburgerProps } from "./Hamburger.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: HamburgerProps

  const renderComponent = () => render(<Hamburger {...props} />)

  it("should render as a default button", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
