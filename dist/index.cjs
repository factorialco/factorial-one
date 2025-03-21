'use strict';

var factorialOneCore = require('@factorialco/factorial-one-core');
var reactNative = require('react-native');
var jsxRuntime = require('react/jsx-runtime');

// src/components/ExampleComponent.tsx
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(reactNative.View, { style: styles.container, children: /* @__PURE__ */ jsxRuntime.jsx(reactNative.Text, { style: styles.text, children: text }) });
};
var styles = reactNative.StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: factorialOneCore.semanticColors.background.default.light,
    borderRadius: 8
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: factorialOneCore.semanticColors.foreground.default.light
  }
});

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map