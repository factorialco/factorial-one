import { View } from "react-native";
import { cva, type VariantProps } from "cva";
import { IconType, applyIconInterop } from "../../Icon";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const moduleAvatarVariants = cva({
  base: "relative flex shrink-0 items-center justify-center",
  variants: {
    size: {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const iconContainerVariants = cva({
  base: "absolute inset-0 items-center justify-center z-10",
  variants: {
    size: {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const iconSizeVariants = cva({
  base: "relative text-f1-foreground-inverse drop-shadow",
  variants: {
    size: {
      sm: "h-[14px] w-[14px]",
      md: "h-[18px] w-[18px]",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ModuleAvatarProps
  extends VariantProps<typeof moduleAvatarVariants> {
  icon: IconType;
}

const squirclePath =
  "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";

export const ModuleAvatar = ({ size = "md", icon }: ModuleAvatarProps) => {
  const IconComponent = applyIconInterop(icon);
  const code = Math.random().toString(36).substring(2, 15);
  const gradientId = `gradient-${code}`;

  return (
    <View className={moduleAvatarVariants({ size })} accessibilityRole="image">
      <Svg
        viewBox="0 0 100 100"
        className="absolute h-full w-full"
        preserveAspectRatio="none"
      >
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#FF355E" />
            <Stop offset="44%" stopColor="#FF355E" />
            <Stop offset="100%" stopColor="#D62D4F" />
          </LinearGradient>
        </Defs>
        <Path d={squirclePath} fill={`url(#${gradientId})`} />
      </Svg>
      <View className={iconContainerVariants({ size })}>
        <IconComponent className={iconSizeVariants({ size })} />
      </View>
    </View>
  );
};

ModuleAvatar.displayName = "IconAvatar";
