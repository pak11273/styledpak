// import "@testing-library/jest-dom/extend-expect"

import Button from "./Button"
import { ButtonProps } from "./Button.types"
// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

describe("<Button />", () => {
  let props: ButtonProps

  const renderComponent = () => render(<Button {...props} />)

  it("should render as a default button", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
