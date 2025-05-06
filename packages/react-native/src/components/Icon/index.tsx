import { cva, type VariantProps } from "cva";
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { SvgProps, Svg } from "react-native-svg";
import { cn } from "../../lib/utils";
import { IconColorName } from "../../lib/colors";
import { cssInterop } from "nativewind";

const iconVariants = cva({
  base: "shrink-0",
  variants: {
    size: {
      lg: "w-6 h-6",
      md: "w-5 h-5",
      sm: "w-4 h-4",
      xs: "w-3 h-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface IconProps extends SvgProps, VariantProps<typeof iconVariants> {
  icon: IconType;
  testID?: string;
  className?: string;
  color?: IconColorName;
}

export type IconType = ForwardRefExoticComponent<
  SvgProps &
    RefAttributes<Svg> & {
      className?: string;
    }
>;

// Keep track of icons that have already had cssInterop applied
const interopAppliedIcons = new WeakSet();

// Function to apply NativeWind interop to an icon component
function applyIconInterop(icon: IconType) {
  if (!interopAppliedIcons.has(icon)) {
    cssInterop(icon, {
      className: {
        target: "style",
        nativeStyleToProp: {
          color: true,
          opacity: true,
        },
      },
    });
    interopAppliedIcons.add(icon);
  }
  return icon;
}

export const Icon = forwardRef<Svg, IconProps>(function Icon(
  { size, icon, className, testID, color = "text-f1-icon", ...props },
  ref,
) {
  if (!icon) return null;

  // Apply NativeWind interop to the icon if not already applied
  const Component = applyIconInterop(icon);

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(iconVariants({ size }), className, color)}
      testID={testID}
    />
  );
});
