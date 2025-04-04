import { ExampleComponent } from "../components/factorial-one/ExampleComponent";
import * as React from "react";
import { View } from "react-native";

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center gap-5 bg-background p-6">
      <ExampleComponent text="Hello from Factorial One React Native!" />
    </View>
  );
}
