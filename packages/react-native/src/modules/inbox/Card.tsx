import { Text, View } from "react-native";
import { RawTag } from "../../components/Tags/RawTag";
import { AppIcons } from "../../icons";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const InboxCard = ({ title, description, date }: Props) => {
  return (
    <View className="flex-row items-center justify-between bg-f1-background">
      <View className="gap-1">
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
