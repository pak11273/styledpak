import { Link } from "./Link"
import { LinkProps } from "./Link.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: LinkProps

  const renderComponent = () => render(<Link to="#" />)

  it("should render a link", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
