import { cva, VariantProps } from "class-variance-authority"
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react"

const iconVariants = cva("inline-block", {
  variants: {
    size: {
      xl: "h-12 w-12",
      lg: "h-8 w-8",
      md: "h-6 w-6",
      sm: "h-4 w-4",
      xs: "h-3 w-3",
    },
    color: {
      primary: "text-foreground",
      secondary: "text-secondary-foreground",
      tertiary: "text-primary-foreground",
    },
  },
  defaultVariants: {
    size: "xl",
    color: "primary",
  },
})

export interface IconProps extends VariantProps<typeof iconVariants> {
  icon: IconType
  color?: "primary" | "secondary" | "tertiary"
}

export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, icon, color }, ref) => {
    if (!icon) return null
    const Component = icon
    return <Component ref={ref} className={iconVariants({ size, color })} />
  }
)
