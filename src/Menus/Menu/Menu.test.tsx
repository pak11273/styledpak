import Menu from "./Menu"
import { MenuProps } from "./Menu.types"
// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: MenuProps

  const renderComponent = () => render(<Menu {...props} />)

  it("should render text correctly", () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId("Menu")

    // expect(component).toHaveTextContent("foo");
  })
})
