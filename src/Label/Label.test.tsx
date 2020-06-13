import Label from "./Label"
import { LabelProps } from "./Label.types"
// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: LabelProps

  const renderComponent = () => render(<Label {...props} />)

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent()
    const component = getByTestId("Label")
  })
})
