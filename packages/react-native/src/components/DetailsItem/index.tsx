import * as React from "react";
import { View, Text } from "react-native";
import { cn } from "../../lib/utils";

export interface DetailsItemProps {
  title: string;
  value: string;
  className?: string;
}

export const DetailsItem: React.FC<DetailsItemProps> = ({
  title,
  value,
  className,
}) => {
  return (
    <View
      className={cn("items-start justify-between bg-f1-background", className)}
    >
      <Text className="text-base font-normal text-f1-foreground-secondary">
        {title}
      </Text>
      <Text className="text-base font-medium text-f1-foreground">{value}</Text>
    </View>
  );
};

DetailsItem.displayName = "DetailsItem";
