import React from "react";
import { render } from "@testing-library/react";

import ButtonIcon from "./ButtonIcon";
import { ButtonIconProps } from "./ButtonIcon.types";

describe("Test Component", () => {
  let props: ButtonIconProps;

  const renderComponent = (props: any) => render(<ButtonIcon {...props} />)
  it("should do something here", () => {})
})

