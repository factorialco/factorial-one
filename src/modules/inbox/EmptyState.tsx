import { Text, View } from "react-native";
import { EmojiAvatar } from "../..";
import { useEffect } from "react";

export type EmptyStateT = {
  title: string;
  description: string;
  onMount?: () => void;
  emoji: string;
};

export const EmptyState = ({
  emoji,
  title,
  description,
  onMount,
}: EmptyStateT) => {
  useEffect(() => {
    onMount?.();
  }, [onMount]);

  return (
    <View className="flex-1 items-center justify-center">
      <View className="pb-3">
        <EmojiAvatar emoji={emoji} size="lg" />
      </View>
      <Text className="text-lg font-medium text-f1-foreground">{title}</Text>
      <Text className="font-regular text-sm text-f1-foreground-secondary">
        {description}
      </Text>
    </View>
  );
};
