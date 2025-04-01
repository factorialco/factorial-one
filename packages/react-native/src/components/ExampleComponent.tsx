import React from "react";
import { Text, View } from "react-native";

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
    <View className="bg-background-default-light flex-1 rounded-lg p-4">
      <Text className="text-foreground-default-light text-lg font-medium">
        {text}
      </Text>
    </View>
  );
};
