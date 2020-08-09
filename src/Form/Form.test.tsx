import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";
import { FormProps } from "./Form.types";

describe("Test Component", () => {
  let props: FormProps;

  const renderComponent = (props: any) => render(<Form {...props} />)
  it("should do something here", () => {})
})

