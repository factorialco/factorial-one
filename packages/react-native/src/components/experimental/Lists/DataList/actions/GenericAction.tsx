import { memo, ReactNode } from "react";
import { InternalGenericActionType } from "../ItemContainer";
import { cn } from "../../../../../lib/utils";
import { Icon } from "../../../../Icon";
import { ChevronRight } from "../../../../../icons/app";
import { Pressable, View } from "react-native";

export type GenericActionProps = {
  children: ReactNode;
  className?: string;
} & InternalGenericActionType;

export const GenericAction = memo(
  ({ children, className, ...props }: GenericActionProps) => {
    return (
      <Pressable
        onPress={props.handlePress}
        {...props}
        className={cn(
          "text-inherit group flex items-center justify-between gap-1.5 rounded p-1.5 text-f1-foreground",
          "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
          className,
        )}
      >
        <View className="flex flex-row items-center gap-1.5">{children}</View>
        <View className="grid">
          <Icon
            aria-hidden={true}
            icon={ChevronRight}
            size="md"
            className="text-f1-foreground"
          />
        </View>
      </Pressable>
    );
  },
);

GenericAction.displayName = "GenericAction";
