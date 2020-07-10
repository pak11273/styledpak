import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";
import { IconProps } from "./Icon.types";

describe("Test Component", () => {
  let props: IconProps;

  const renderComponent = (props: any) => render(<Icon {...props} />)
  it("should do something here", () => {})
})

