import { cva, VariantProps } from "class-variance-authority"
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react"

const iconVariants = cva("inline-block fill-current", {
  variants: {
    size: {
      xl: "h-12 w-12",
      lg: "h-8 w-8",
      md: "h-6 w-6",
      sm: "h-4 w-4",
      xs: "h-3 w-3",
    },
  },
  defaultVariants: {
    size: "xl",
  },
})

export interface IconProps extends VariantProps<typeof iconVariants> {
  icon: IconType
}

export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, icon }, ref) => {
    if (!icon) return null
    const Component = icon
    return <Component ref={ref} className={iconVariants({ size })} />
  }
)
