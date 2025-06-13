import { memo, ReactNode } from "react";
import { InternalNavigateActionType } from "../ItemContainer";
import { cn } from "../../../../../lib/utils";
import { Icon } from "../../../../Icon";
import { ChevronRight } from "../../../../../icons/app";
import { View } from "react-native";

export type NavigateActionProps = {
  children: ReactNode;
  className?: string;
} & InternalNavigateActionType;

export const NavigateAction = memo(
  ({ children, className, ...props }: NavigateActionProps) => {
    return (
      <View
        {...props}
        className={cn(
          "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
          "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
          className,
        )}
      >
        {children}
        <View className="grid">
          <Icon
            aria-hidden={true}
            icon={ChevronRight}
            size="md"
            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
          />
        </View>
      </View>
    );
  },
);

NavigateAction.displayName = "NavigateAction";
