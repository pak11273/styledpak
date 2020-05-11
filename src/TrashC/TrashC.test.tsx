// Generated with util/create-component.js
import React from "react"
import TrashC from "./TrashC"
import { TrashCProps } from "./TrashC.types"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  let props: TrashCProps

  beforeEach(() => {
    props = {
      foo: "bar",
    }
  })

  const renderComponent = () => render(<TrashC {...props} />)

  it("should render foo text correctly", () => {
    props.foo = "foo"
    renderComponent()
  })
})
