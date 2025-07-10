import { f1Colors } from "@factorialco/factorial-one-core"
import { cva, type VariantProps } from "cva"
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react"
import { cn } from "../../../lib/utils"

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
  color?: Lowercase<keyof typeof f1Colors.icon> | `#${string}` | "currentColor"
}

export type IconType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> &
    RefAttributes<SVGSVGElement> & {
      animate?: "normal" | "animate"
    }
>

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  { size, icon, state = "normal", color = "currentColor", ...props },
  ref
) {
  if (!icon) return null
  const Component = icon
  const isAnimated = icon.displayName?.includes("Animated")

  const isHexColor = color.startsWith("#")

  const getColorClass = (colorValue: string) => {
    if (colorValue === "currentColor") return "text-current"
    if (colorValue === "default") return "text-f1-icon"
    if (colorValue.startsWith("#")) return ""
    return `text-f1-icon-${colorValue}`
  }

  const colorClass = getColorClass(color)
  const colorStyle = isHexColor ? { color } : undefined

  if (isAnimated) {
    return (
      <Component
        ref={ref}
        {...props}
        animate={state}
        className={cn(iconVariants({ size }), "select-none", colorClass)}
        style={colorStyle}
      />
    )
  }

  return (
    <Component
      ref={ref}
      {...props}
      className={cn("aspect-square", iconVariants({ size }), colorClass)}
      style={colorStyle}
    />
  )
})
