import React from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";

export interface ExampleComponentProps {
  /**
   * Optional custom text to display
   */
  text?: string;
}

/**
 * An example component that demonstrates system-based dark/light mode functionality
 */
export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  text = "Hello World",
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      className={`rounded-lg p-6 ${isDarkMode ? "bg-gray-800" : "bg-blue-100"}`}
      style={styles.container}
    >
      <Text
        className={`mb-4 text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}
      >
        System {isDarkMode ? "Dark" : "Light"} Mode
      </Text>

      <View
        className={`rounded-lg p-4 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}
        style={styles.contentBox}
      >
        <Text
          className={`text-base font-medium ${isDarkMode ? "text-gray-100" : "text-gray-800"}`}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minWidth: 250,
  },
  contentBox: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
});
