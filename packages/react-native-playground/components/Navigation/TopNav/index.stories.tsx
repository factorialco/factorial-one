import React from "react";
import { ScrollView, View, Text } from "react-native";
import type { Meta, StoryFn } from "@storybook/react";
import { TopNav } from "@factorialco/factorial-one-react-native";

const meta: Meta<typeof TopNav> = {
  title: "Components/Navigation/TopNav",
  component: TopNav,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <ScrollView>
        <Story />
      </ScrollView>
    ),
  ],
};

export default meta;

export const Showcase = () => {
  return (
    <View>
      <Text className="text-lg font-bold my-4 text-f1-foreground px-4">
        Default
      </Text>
      <TopNav onPress={() => console.log("Back pressed")} />
    </View>
  );
};
