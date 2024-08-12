module.exports = {
  prettier: false,
  ref: true,
  svgo: true,
  typescript: true,
  dimensions: false,
  replaceAttrValues: {
    "#FF355E": "currentColor",
    "#515164": "currentColor",
  },
  svgoConfig: {
    plugins: [
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ "vector-effect": "non-scaling-stroke" }],
        },
      },
    ],
  },
  template: (variables, { tpl }) => {
    return tpl`
      import * as React from 'react';
      import { SVGProps, forwardRef } from 'react';
      import { withVectorEffect } from '../lib/vector-icon';

      const ${variables.componentName} = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => (${variables.jsx});

      const ForwardRef = forwardRef(${variables.componentName});
      export default withVectorEffect(ForwardRef);
    `
  },
}
