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
      lg: "[&_path]:stroke-lg [&_circle]:stroke-lg w-6",
      md: "[&_path]:stroke-md [&_circle]:stroke-md w-5",
      sm: "[&_path]:stroke-sm [&_circle]:stroke-sm w-4",
    },
  },
  defaultVariants: {
    size: "md",
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
      className={cn("aspect-square", iconVariants({ size }), className)}
    />
  )
})
