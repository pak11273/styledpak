import Card from "./Card"
import { CardProps } from "./Card.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  const renderComponent = () => render(<Card />)
  it("should render a card", () => {
    expect(renderComponent).toMatchSnapshot()
  })
})
