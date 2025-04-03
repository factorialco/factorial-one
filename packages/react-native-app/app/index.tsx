import { View } from "react-native";
import { ExampleComponent } from "../src/components/ExampleComponent";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ExampleComponent text="Hello World" />
    </View>
  );
}
