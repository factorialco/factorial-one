import { cva, VariantProps } from "class-variance-authority"
import { forwardRef, SVGProps } from "react"

const iconVariants = cva("inline-block", {
  variants: {
    size: {
      xl: "h-12 w-12",
      lg: "h-8 w-8",
      md: "h-5 w-5",
      sm: "h-4 w-4",
    },
  },

  defaultVariants: {
    size: "xl",
  },
})

export interface IconProps extends VariantProps<typeof iconVariants> {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, icon: IconComponent }, ref) => {
    if (!IconComponent) return null
    return <IconComponent ref={ref} className={iconVariants({ size })} />
  }
)
