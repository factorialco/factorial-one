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
      large: "h-8 w-8",
      medium: "h-6 w-6",
      small: "h-4 w-4",
      tiny: "h-3 w-3",
    },
  },
  defaultVariants: {
    size: "medium",
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
