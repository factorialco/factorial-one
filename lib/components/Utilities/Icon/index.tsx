import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react"

const iconVariants = cva({
  base: "inline-block shrink-0",
  variants: {
    size: {
      lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
      md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
      sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
      xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs",
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
  state?: "normal" | "animate"
}

export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> &
    RefAttributes<SVGSVGElement> & {
      animate?: "normal" | "animate"
    }
>

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { size, icon, state = "normal", className, ...props },
  ref
) {
  if (!icon) return null
  const Component = icon
  const isAnimated = icon.displayName?.includes("Animated")

  if (isAnimated) {
    return (
      <Component
        ref={ref}
        {...props}
        animate={state}
        className={cn(iconVariants({ size }), "select-none", className)}
      />
    )
  }

  return (
    <Component
      ref={ref}
      {...props}
      className={cn("aspect-square", iconVariants({ size }), className)}
    />
  )
})
