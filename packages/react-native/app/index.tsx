import * as React from "react";
import { Text, View } from "react-native";
import { ExampleComponent } from "~/components/factorial-one/ExampleComponent";

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center gap-5 p-6">
      <Text className="text-foreground">Test</Text>
      <ExampleComponent text="Hello from Factorial One React Native!" />
    </View>
  );
}
