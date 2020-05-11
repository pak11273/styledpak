import React from "react"
import TestComponent from "./TestComponent"
import { TestComponentProps } from "./TestComponent.types"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: TestComponentProps

  beforeEach(() => {
    props = {
      theme: "primary",
    }
  })

  const renderComponent = () => render(<TestComponent {...props} />)

  it("renders correctly", () => {
    // On the first run of this test, Jest will generate a snapshot file automatically.
  })
})
