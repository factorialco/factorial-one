import { Pressable, Text, View } from "react-native";
import { RawTag } from "../../components/Tags/RawTag";
import { AppIcons } from "../../icons";
import { PersonAvatar } from "../../components/Avatars/PersonAvatar";
import { AlertTag } from "../../components/Tags/AlertTab";
import { useState } from "react";
import { cn } from "../../lib/utils";

type Props = {
  id: string;
  title: string;
  description: string;
  date: string;
  firstName: string;
  lastName: string;
  src?: string;
  onPress?: (id: string) => void;
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
}: Props) => {
  const [randomFlag] = useState(Math.random() < 0.5);
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
      <View className="flex-1 justify-between gap-1">
        <Text className="line-clamp-2 text-base font-medium text-f1-foreground">
          {title}
        </Text>
        <Text className="font-regular line-clamp-2 text-base text-f1-foreground-secondary">
          {description}
        </Text>
        <View className="flex-row gap-2">
          {randomFlag && <AlertTag level="warning" text={"Due in 2 days"} />}
          <RawTag icon={AppIcons.CalendarArrowRight} text={date} />
        </View>
      </View>
    </Pressable>
  );
};
