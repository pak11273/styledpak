module.exports = componentName => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";
import { storiesOf } from "@storybook/react"

export default {
    title: "${componentName}"
};

storiesOf("${componentName}", module)
  .add("base", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <${componentName}>base box</${componentName}>
    </div>
    ))
  .add("with props", () => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <${componentName}>${componentName} with props</${componentName}>
    </div>
    ))
`,
  extension: `.stories.tsx`,
})
