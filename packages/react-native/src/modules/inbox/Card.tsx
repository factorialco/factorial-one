import { Text, View } from "react-native";
import { RawTag } from "../../components/Tags/RawTag";
import { AppIcons } from "../../icons";
import { PersonAvatar } from "../../components/Avatars/PersonAvatar";

type Props = {
  title: string;
  description: string;
  date: string;
  firstName: string;
  lastName: string;
  src?: string;
};

export const InboxCard = ({
  title,
  description,
  date,
  src,
  firstName,
  lastName,
}: Props) => {
  return (
    <View className="flex-row gap-3 bg-f1-background">
      <View className="flex-row flex-wrap gap-2">
        <PersonAvatar
          firstName={firstName}
          lastName={lastName}
          src={src}
          size="medium"
        />
      </View>
      <View className="justify-between gap-1">
        <Text className="text-base font-medium text-f1-foreground">
          {title}
        </Text>
        <Text className="font-regular text-base text-f1-foreground">
          {description}
        </Text>
        <RawTag icon={AppIcons.CalendarArrowRight} text={date} />
      </View>
    </View>
  );
};
