import Avatar from "./Avatar"
import { AvatarProps } from "./Avatar.types"
import React from "react"
import { render } from "@testing-library/react"

describe("Test Component", () => {
  // let props: AvatarProps;

  const renderComponent = (props: any) => render(<Avatar {...props} />)
  it("should do something here", () => {})
})
