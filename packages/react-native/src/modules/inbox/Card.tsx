import { Pressable, Text, View } from "react-native";
import { RawTag } from "../../components/Tags/RawTag";
import { AppIcons } from "../../icons";
import { PersonAvatar } from "../../components/Avatars/PersonAvatar";
import { AlertTag } from "../../components/Tags/AlertTab";
import { useState } from "react";
import { cn } from "../../lib/utils";

type IndicatorT =
  | "open_detail"
  | "navigate"
  | "not_actionable"
  | "open_browser";

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
  firstName: string;
  lastName: string;
  src?: string;
  onPress?: (id: string) => void;
  indicator?: {
    type: IndicatorT;
  };
  due?: string;
};

export const InboxCard = ({
  id,
  title,
  description,
  date,
  src,
  firstName,
  lastName,
  onPress,
  indicator,
  due,
}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      className={cn(
        "flex-row gap-3 rounded-lg bg-f1-background px-2 py-3",
        isPressed && "bg-f1-background-hover",
      )}
      onPress={() => {
        onPress?.(id);
      }}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View className="flex-row flex-wrap gap-2">
        <PersonAvatar
          firstName={firstName}
          lastName={lastName}
          src={src}
          size="medium"
        />
      </View>
      <View className="flex-1 justify-between gap-1" pointerEvents="none">
        <View className="flex-1 flex-row items-center justify-between">
          <Text className="line-clamp-2 text-base font-medium text-f1-foreground">
            {title}
          </Text>
          {indicator?.type === "navigate" && (
            <RawTag icon={AppIcons.ArrowRight} />
          )}
          {indicator?.type === "open_detail" && (
            <RawTag icon={AppIcons.Maximize} />
          )}
          {indicator?.type === "not_actionable" && (
            <RawTag icon={AppIcons.Laptop} />
          )}
          {indicator?.type === "open_browser" && (
            <RawTag icon={AppIcons.Globe} />
          )}
        </View>
        <Text className="font-regular line-clamp-2 text-base text-f1-foreground-secondary">
          {description}
        </Text>
        <View className="flex-row gap-2">
          {due && <AlertTag level="warning" text={due} />}
          <RawTag icon={AppIcons.CalendarArrowRight} text={date} />
        </View>
      </View>
    </Pressable>
  );
};
