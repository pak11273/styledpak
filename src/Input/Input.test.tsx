import Input from "./Input"
import { InputProps } from "./Input.types"
// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: InputProps

  const renderComponent = () => render(<Input {...props} />)

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId("Input")
  })
})
