import { ExampleComponent } from "@factorialco/factorial-one-react-native";
import * as React from "react";
import { View, Text } from "react-native";

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center gap-5 bg-red-200 p-6">
      <Text className="text-foreground">Example App!</Text>
      <ExampleComponent text="Hello from Factorial One React Native!" />
    </View>
  );
}
