// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TrashC from "./TrashC";
import { TrashCProps } from "./TrashC.types";

describe("Test Component", () => {
  let props: TrashCProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TrashC {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TrashC");

    expect(component).toHaveTextContent("harvey was here");
  });
});
