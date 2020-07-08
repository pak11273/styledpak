module.exports = componentName => ({
  content: `import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

const ${componentName}: React.FC<${componentName}Props> = () => (
    <div>pending</div>
);

export default ${componentName};

`,
  extension: `.tsx`,
})
