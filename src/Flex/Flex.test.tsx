import Flex from "./Flex"
import { FlexProps } from "./Flex.types"
// Generated with util/create-component.js
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: FlexProps

  const renderComponent = () => render(<Flex />)

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId("Flex")
  })
})
