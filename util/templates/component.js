module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => (
    <div>{foo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`,
})
