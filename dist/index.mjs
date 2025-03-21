// src/components/ExampleComponent.tsx
import { semanticColors } from "@factorialco/factorial-one-core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
var ExampleComponent = ({
  text = "Hello World"
}) => {
  return /* @__PURE__ */ React.createElement(View, { style: styles.container }, /* @__PURE__ */ React.createElement(Text, { style: styles.text }, text));
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
export {
  ExampleComponent
};
//# sourceMappingURL=index.mjs.map