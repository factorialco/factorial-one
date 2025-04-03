import { View } from "react-native";
import { ExampleComponent } from "../components/ExampleComponent";

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
      <ExampleComponent />
    </View>
  );
}
