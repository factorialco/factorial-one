import { cn, focusRing } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "cva"
import * as React from "react"
import { useRef } from "react"

export const variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
] as const
export type ButtonVariant = (typeof variants)[number]

export const sizes = ["sm", "md", "lg"] as const
export type ButtonSize = (typeof sizes)[number]

const buttonVariants = cva({
  base: cn(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors"
  ),
  variants: {
    disabled: {
      true: "pointer-events-none opacity-50",
      false: cn("cursor-pointer", focusRing()),
    },
    variant: {
      default:
        "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
      outline:
        "border border-solid border-f1-border bg-f1-background-inverse-secondary text-f1-foreground hover:border-f1-border-hover",
      neutral:
        "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
      critical:
        "border border-solid border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:border-transparent hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse dark:bg-transparent dark:hover:bg-f1-background-critical-bold",
      ghost:
        "bg-transparent text-f1-foreground hover:bg-f1-background-secondary-hover",
      promote:
        "border border-solid border-f1-border-promote bg-f1-background-promote text-f1-foreground hover:bg-f1-background-promote-hover",
    } satisfies Record<ButtonVariant, string>,
    size: {
      sm: "h-6 rounded-sm px-2",
      md: "h-8 rounded px-3",
      lg: "h-10 rounded px-4",
    } satisfies Record<ButtonSize, string>,
    round: {
      true: "aspect-square px-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    round: false,
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  appendButton?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      round,
      variant,
      disabled,
      size,
      asChild = false,
      appendButton,
      children,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLButtonElement>(null)
    // Combine the refs - use forwarded ref if provided, otherwise fall back to inner ref
    const buttonRef = (ref || innerRef) as React.RefObject<HTMLButtonElement>

    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, round, disabled: !!disabled }),
          className
        )}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={(e) => {
          e.preventDefault()
          buttonRef.current?.click()
        }}
        onKeyPress={(e) => {
          e.preventDefault()
          if (e.key === "Enter" || e.key === " ") {
            buttonRef.current?.click()
          }
        }}
      >
        <button
          ref={buttonRef}
          tabIndex={-1}
          role="button"
          className={cn(
            "group inline-flex items-center justify-center gap-1 whitespace-nowrap",
            "text-inherit font-inherit text-current"
          )}
          disabled={disabled}
          {...props}
          onClick={(e) => {
            // Avoid the click event from bubbling up to the parent to avoid double clicks
            e.stopPropagation()
            props.onClick?.(e)
          }}
        >
          {children}
        </button>
        {appendButton}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
