import React from "react";
import { render } from "@testing-library/react";

import Section from "./Section";
import { SectionProps } from "./Section.types";

describe("Test Component", () => {
  let props: SectionProps;

  const renderComponent = (props: any) => render(<Section {...props} />)
  it("should do something here", () => {})
})

