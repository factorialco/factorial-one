import { capitalize } from "lodash";
import { Text, View } from "react-native";

export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <View className="px-4 pb-2 pt-3">
      <Text className="font-regular text-sm text-f1-foreground">
        {capitalize(title)}
      </Text>
    </View>
  );
};
