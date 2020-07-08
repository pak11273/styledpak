module.exports = componentName => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });


});
`,
  extension: `.test.tsx`,
})

module.exports = componentName => ({
  content: `import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  const renderComponent = (props: any) => render(<${componentName} {...props} />)
  it("should do something here", () => {})
})

`,
  extension: `.test.tsx`,
})
