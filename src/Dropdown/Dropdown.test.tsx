import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

describe("Test Component", () => {
  let props: DropdownProps;

  const renderComponent = (props: any) => render(<Dropdown {...props} />)
  it("should do something here", () => {})
})

