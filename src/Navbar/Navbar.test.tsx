import Navbar from "./Navbar"
import { NavbarProps } from "./Navbar.types"
// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: NavbarProps

  const renderComponent = props => render(<Navbar {...props} />)

  it("should render text correctly", () => {
    const { getByTestId } = renderComponent(props)

    const component = getByTestId("Navbar")

    // expect(component).toHaveTextContent("foo");
  })
})
