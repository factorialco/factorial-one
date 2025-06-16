import { forwardRef, ReactElement, ReactNode } from "react";
import { CopyAction } from "./actions/CopyAction";
import { cn } from "../../../../lib/utils";
import { Icon, IconType } from "../../../Icon";
import { View, Text } from "react-native";
import { GenericAction } from "./actions/GenericAction";

type ItemContainerProps = {
  leftIcon?: IconType | (() => ReactElement);
  action?: InternalActionType;
  text: string;
  className?: string;
};

// internally all action fields are mandatory
export type InternalActionType =
  | InternalCopyActionType
  | InternalGenericActionType
  | InternalNoopActionType;

export type InternalCopyActionType = {
  type: "copy";
  text: string;
};

export type InternalGenericActionType = {
  type: "generic";
  handlePress: () => void;
};

export type InternalNoopActionType = {
  type: "noop";
};

export const ItemContainer = forwardRef<HTMLLIElement, ItemContainerProps>(
  (props) => {
    const {
      text,
      leftIcon: LeftIcon,
      className,
      action = { type: "noop" },
    } = props;

    return (
      <View className="flex rounded font-medium text-f1-foreground *:flex-1">
        <Action
          action={action}
          className={cn("flex flex-row items-center gap-1.5 p-1.5", className)}
        >
          {LeftIcon &&
            (typeof LeftIcon === "function" ? (
              LeftIcon({})
            ) : (
              <Icon icon={LeftIcon} size="md" />
            ))}
          <Text className="line-clamp-5 text-left text-f1-foreground">
            {text}
          </Text>
        </Action>
      </View>
    );
  },
);
ItemContainer.displayName = "ItemContainer";

const Action = ({
  children,
  action,
  ...props
}: {
  className: string;
  action: InternalActionType;
  children: ReactNode;
}) => {
  const type = action.type;
  switch (type) {
    case "copy":
      return (
        <CopyAction {...action} {...props}>
          {children}
        </CopyAction>
      );
    case "generic":
      return (
        <GenericAction {...action} {...props}>
          {children}
        </GenericAction>
      );
    case "noop":
      return <View {...props}>{children}</View>;
    default: {
      const _exhaustiveCheck: never = type;
      return _exhaustiveCheck;
    }
  }
};
