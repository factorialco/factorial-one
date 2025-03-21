import { semanticColors } from '@factorialco/factorial-one-core';
import { StyleSheet, View, Text } from 'react-native';
import { jsx } from 'react/jsx-runtime';

// src/components/ExampleComponent.tsx
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ jsx(View, { style: styles.container, children: /* @__PURE__ */ jsx(Text, { style: styles.text, children: text }) });
};
var styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: semanticColors.background.default.light,
    borderRadius: 8
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: semanticColors.foreground.default.light
  }
});

export { ExampleComponent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map