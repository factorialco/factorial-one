import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "cva"
import * as React from "react"
import { useRef } from "react"
import { cn, focusRing } from "../lib/utils"

export const variants = [
  "default",
  "outline",
  "critical",
  "neutral",
  "ghost",
  "promote",
  "outlinePromote",
] as const
export type ButtonVariant = (typeof variants)[number]

export const sizes = ["sm", "md", "lg"] as const
export type ButtonSize = (typeof sizes)[number]

const buttonVariants = cva({
  base: cn(
    "group relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border-none p-0 text-base font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_button]:transform-gpu [&_button]:transition-transform [&_button]:duration-100 active:[&_button]:translate-y-px"
  ),
  variants: {
    disabled: {
      true: "pointer-events-none opacity-50",
      false: cn("cursor-pointer", focusRing()),
    },
    pressed: {
      true: "[&_button]:translate-y-px",
      false: "",
    },
    variant: {
      default: cn(
        "bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover",
        "active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]",
        "data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]"
      ),
      outline: cn(
        "bg-f1-background-inverse-secondary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover",
        "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
      neutral: cn(
        "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]",
        "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]"
      ),
      critical: cn(
        "bg-f1-background-secondary text-f1-foreground-critical after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse hover:after:ring-transparent dark:bg-transparent dark:hover:bg-f1-background-critical-bold",
        "active:bg-f1-background-critical-bold active:text-f1-foreground-inverse active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] active:after:ring-transparent",
        "data-[pressed=true]:bg-f1-background-critical-bold data-[pressed=true]:text-f1-foreground-inverse data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:after:ring-transparent"
      ),
      ghost: cn(
        "bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]",
        "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]",
        "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"
      ),
      promote: cn(
        "bg-f1-background-promote text-f1-foreground shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(245,165,28,.15)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border-promote after:transition-all after:content-[''] hover:bg-f1-background-promote-hover dark:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.30)]",
        "active:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]",
        "data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]"
      ),
      outlinePromote: cn(
        "bg-f1-background-inverse-secondary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover",
        "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover",
        "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"
      ),
    } satisfies Record<ButtonVariant, string>,
    size: {
      sm: "rounded-sm after:rounded-sm",
      md: "rounded",
      lg: "rounded-md after:rounded-md",
    } satisfies Record<ButtonSize, string>,
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    pressed: false,
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  round?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  appendButton?: React.ReactNode
  pressed?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      round = false,
      variant,
      disabled,
      size,
      asChild = false,
      appendButton,
      pressed,
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
      <>
        <Comp
          className={cn(
            buttonVariants({ variant, size, disabled: !!disabled, pressed }),
            appendButton &&
              "rounded-r-none after:rounded-r-none [&>button]:rounded-r-none",
            className
          )}
          data-pressed={pressed}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          onClick={(e) => {
            e.preventDefault()
            buttonRef.current?.click()
          }}
          onKeyDown={(e) => {
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
              "text-inherit font-inherit text-current",
              size === "sm" && "h-6 px-2",
              size === "md" && "h-8 px-3",
              size === "lg" && "h-10 px-4",
              round && "aspect-square px-0"
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
        </Comp>
        {appendButton && (
          <div
            className={cn(
              "relative h-fit w-fit translate-x-[-1px] [&>button]:rounded-l-none [&>div:after]:rounded-l-none [&>div]:rounded-l-none",
              size === "sm" && "h-6 w-6",
              size === "md" && "h-8 w-8",
              size === "lg" && "h-10 w-10"
            )}
          >
            {appendButton}
          </div>
        )}
      </>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
