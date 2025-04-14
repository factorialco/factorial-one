import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ExampleComponentProps {
  /**
   * The text to display in the component
   */
  text: string;
  /**
   * The background color of the component
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onPress?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  text,
  backgroundColor = "#3498db",
  onPress,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
