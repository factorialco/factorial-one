import { memo } from "react";
import { View } from "react-native";
import { Button } from "../../Button";
import { AppIcons } from "../../../icons";

export type TopNavProps = {
  onPress: () => void;
};

export const TopNav = memo(({ onPress }: TopNavProps) => {
  return (
    <View className="flex-row items-center px-5 py-3">
      <Button
        variant="outline"
        icon={AppIcons.ArrowLeft}
        label="Back"
        hideLabel
        onPress={onPress}
        size="md"
        round
      />
    </View>
  );
});

TopNav.displayName = "TopNav";
