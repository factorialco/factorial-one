'use strict';

var reactNative = require('react-native');
var jsxRuntime = require('react/jsx-runtime');

// src/components/ExampleComponent.tsx
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { className: "flex-1 rounded-lg bg-red-400 p-4", children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { className: "text-foreground-default-light text-lg font-medium", children: text }) });
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map