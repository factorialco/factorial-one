import { cva, type VariantProps } from "cva";
import { CrossedCircle } from "../../icons/app";
import { cn } from "../../lib/utils";
import { Icon, IconType } from "../Icon";
import { View, Text, Pressable } from "react-native";

export const chipContainerVariants = cva({
  base: "flex items-center gap-1 rounded-full border border-solid border-f1-border px-2 py-0.5 grow-0",
  variants: {
    variant: {
      default: "",
      selected: "border-f1-border-selected bg-f1-background-selected-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const chipTextVariants = cva({
  base: "font-medium",
  variants: {
    variant: {
      default: "text-f1-foreground",
      selected: "text-f1-foreground-selected",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ChipProps extends VariantProps<typeof chipContainerVariants> {
  label: string;
  icon?: IconType;
  onClick?: () => void;
  onClose?: () => void;
}

export const Chip = ({ label, variant, onClick, onClose, icon }: ChipProps) => {
  return (
    <View className="flex items-start">
      <Pressable
        className={cn(
          chipContainerVariants({ variant }),
          onClose && "pr-1.5",
          icon && "pl-1.5",
          onClick && "cursor-pointer",
        )}
        onPress={onClick}
        tabIndex={onClick ? 0 : undefined}
      >
        <View className="flex flex-row items-center gap-0.5">
          {icon && (
            <Icon
              icon={icon}
              size="sm"
              className={chipTextVariants({ variant })}
            />
          )}
          <Text className={chipTextVariants({ variant })}>{label}</Text>
          {onClose && (
            <Pressable
              onPress={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className={cn(
                "-m-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full [&_svg]:text-f1-icon-secondary [&_svg]:transition-colors [&_svg]:hover:text-f1-icon [&_svg]:focus:text-f1-icon",
                variant === "selected" &&
                  "[&_svg]:text-f1-icon-selected [&_svg]:hover:text-f1-icon-selected-hover [&_svg]:focus:text-f1-icon-selected-hover",
              )}
              tabIndex={0}
              aria-label="Close"
            >
              <Icon icon={CrossedCircle} size="sm" />
            </Pressable>
          )}
        </View>
      </Pressable>
    </View>
  );
};
