import type { StoryFn } from "@storybook/react";
import { Counter } from "@factorialco/factorial-one-react-native";
import { ScrollView, View, Text } from "react-native";

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story: StoryFn) => (
      <View className="flex-1">
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const CounterShowcase = () => {
  return (
    <ScrollView className="p-4">
      {/* Basic Variants */}
      <Text className="text-lg font-bold mb-4 text-f1-foreground">
        Default Variants
      </Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Counter value={42} />
        <Counter value={142} type="bold" maxValue={99} />
        <Counter value={42} type="selected" />
      </View>
    </ScrollView>
  );
};
