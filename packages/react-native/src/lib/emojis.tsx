import { Text } from "react-native";
import { cn } from "./utils";

export interface EmojiImageProps {
  size?: string;
  className?: string;
  emoji: string;
}

export function EmojiImage({ emoji, size, className }: EmojiImageProps) {
  return (
    <Text className={cn(size, className)} key={emoji}>
      {emoji}
    </Text>
  );
}

export function getEmojiLabel(emoji: string): string {
  return `${emoji} emoji`;
}
