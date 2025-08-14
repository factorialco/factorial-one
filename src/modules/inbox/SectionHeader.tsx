import { capitalize } from "lodash";
import { Text, View } from "react-native";
import { Counter } from "../../components/Counter";

export const SectionHeader = ({
  title,
  count,
}: {
  title: string;
  count: number;
}) => {
  return (
    <View className="flex-row items-center justify-start gap-2 px-5 py-3">
      <Text className="text-base font-semibold text-f1-foreground">
        {capitalize(title)}
      </Text>
      <Counter value={count} />
    </View>
  );
};
