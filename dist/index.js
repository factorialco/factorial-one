import { View, Text } from 'react-native';
import { jsx } from 'react/jsx-runtime';

// src/components/ExampleComponent.tsx
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsx(View, { className: "flex-1 rounded-lg bg-red-400 p-4", children: /* @__PURE__ */ jsx(Text, { className: "text-foreground-default-light text-lg font-medium", children: text }) });
};

export { ExampleComponent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map