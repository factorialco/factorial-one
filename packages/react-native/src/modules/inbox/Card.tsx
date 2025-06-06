import { Text, View } from "react-native";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const InboxCard = ({ title, description, date }: Props) => {
  return (
    <View className="flex-row items-center justify-between bg-f1-background">
      <View>
        <Text className="text-f1-foreground">{title}</Text>
        <Text className="text-f1-foreground">{description}</Text>
        <Text className="text-f1-foreground">{date}</Text>
      </View>
    </View>
  );
};
