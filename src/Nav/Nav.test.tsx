import Nav from "./Nav"
import { NavProps } from "./Nav.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: NavProps

  const renderComponent = (props: any) => render(<Nav {...props} />)
  it("should do something here", () => {})
})
