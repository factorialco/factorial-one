import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

export const variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
] as const

export const sizes = ["small", "medium", "large"] as const

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
        outline:
          "border border-solid border-f1-border bg-f1-background text-f1-foreground hover:border-f1-border-hover",
        neutral:
          "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        critical:
          "border border-solid border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:border-none hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse",
        ghost:
          "bg-transparent text-f1-foreground hover:bg-f1-background-secondary-hover",
        promote:
          "border border-solid border-f1-border-promote bg-f1-background-promote text-f1-foreground hover:bg-f1-background-promote-hover",
      } satisfies Record<(typeof variants)[number], string>,
      size: {
        small: "h-6 rounded-sm px-2",
        medium: "h-8 rounded-md px-3",
        large: "h-10 rounded-md px-4",
      } satisfies Record<(typeof sizes)[number], string>,
      round: {
        true: "aspect-square px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      round: false,
    },
  }
)

const iconVariants = cva("-ml-0.5 transition-colors", {
  variants: {
    variant: {
      default: "text-f1-icon-inverse/80",
      outline: "text-f1-icon",
      neutral: "text-f1-icon",
      critical:
        "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse/80",
      ghost: "text-f1-icon",
      promote: "text-f1-icon",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const iconOnlyVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "text-f1-icon-inverse",
      outline: "text-f1-icon-bold",
      neutral: "text-f1-icon-bold",
      critical: "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse",
      ghost: "text-f1-icon-bold",
      promote: "text-f1-icon-bold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, round, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, round }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, iconOnlyVariants, iconVariants }
