import { semanticColors } from "@factorialco/factorial-one-core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface ExampleComponentProps {
  /**
   * Optional custom text to display
   */
  text?: string;
  test?: string;
}

/**
 * A simple example component that displays "Hello World" or custom text
 */
export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  text = "Hello World",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: semanticColors.background.default.light,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: semanticColors.foreground.default.light,
  },
});
