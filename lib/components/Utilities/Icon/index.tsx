import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react"

const iconVariants = cva("inline-block shrink-0", {
  variants: {
    size: {
      xl: "h-12 w-12",
      lg: "h-8 w-8",
      md: "h-5 w-5",
      sm: "h-4 w-4",
      xs: "h-3 w-3",
    },
  },

  defaultVariants: {
    size: "xl",
  },
})

export interface IconProps
  extends SVGProps<SVGSVGElement>,
    VariantProps<typeof iconVariants> {
  icon: IconType
}

export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { size, icon, className, ...props },
  ref
) {
  if (!icon) return null
  const Component = icon
  return (
    <Component
      ref={ref}
      {...props}
      className={cn(iconVariants({ size }), className)}
    />
  )
})
