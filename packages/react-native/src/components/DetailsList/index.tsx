import * as React from "react";
import { View } from "react-native";
import { DetailsItem, DetailsItemProps } from "../DetailsItem";
import { cn } from "../../lib/utils";

export interface DetailsListProps {
  items: Array<Pick<DetailsItemProps, "title" | "value">>;
  className?: string;
}

export const DetailsList: React.FC<DetailsListProps> = ({
  items,
  className,
}) => {
  return (
    <View
      className={cn(
        className,
        "overflow-hidden rounded-xl border border-f1-border-secondary",
      )}
    >
      {items.map((item, idx) => (
        <View
          key={item.title + idx}
          className={cn(
            "bg-f1-background p-3",
            idx !== items.length - 1 && "border-b border-f1-border-secondary",
          )}
        >
          <DetailsItem title={item.title} value={item.value} />
        </View>
      ))}
    </View>
  );
};

DetailsList.displayName = "DetailsList";
