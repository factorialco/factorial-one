import { ExampleComponent } from "../../../react-native/src";
import * as React from "react";
import { View } from "react-native";

export default function Screen() {
  return (
    <View className="bg-secondary/30 flex-1 items-center justify-center gap-5 p-6">
      <ExampleComponent text="Hello from Factorial One React Native!" />
    </View>
  );
}
