import { cva, type VariantProps } from "cva";
import React, {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import { SvgProps } from "react-native-svg";
import { cn } from "../../lib/utils";
import { IconColorName } from "../../lib/colors";

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
    RefAttributes<SVGSVGElement> & {
      className?: string;
    }
>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { size, icon, className, testID, color = "text-f1-icon", ...props },
  ref,
) {
  if (!icon) return null;
  const Component = icon;

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(iconVariants({ size }), className, color)}
      testID={testID}
    />
  );
});
