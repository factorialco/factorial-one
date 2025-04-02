import { Text, View } from "react-native";

export const ExampleComponent = ({ text }: { text: string }) => {
  return (
    <View>
      <Text className="text-white">Custom text in white:{text}</Text>
      <Text className="text-red-600">Custom text in red:{text}</Text>
      <Text className="text-blue-600">Custom text in blue:{text}</Text>
    </View>
  );
};
