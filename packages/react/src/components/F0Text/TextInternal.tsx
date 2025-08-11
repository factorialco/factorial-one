import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import type React from "react"
import { createElement, forwardRef, type ReactNode } from "react"

const textVariants = cva({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      heading: "text-lg font-semibold",

      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      selected: "font-medium text-f1-foreground-selected",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",

      // Label
      label: "font-medium",
      "label-input": "font-medium text-f1-foreground-secondary",

      // -- PRIVATE VARIANTS
      // Semantic text
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
  },
})

type TextVariants = VariantProps<typeof textVariants>
type TextVariant = NonNullable<TextVariants["variant"]>
type AsAllowedList = "div" | "p" | "label" | "span" | "h1" | "h2" | "code"
const defaultTag: Record<TextVariant, AsAllowedList> = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code",
}

export interface TextInternalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className">,
    React.RefAttributes<HTMLElement> {
  /**
   * Content to be rendered
   */
  children?: ReactNode

  /**
   * The text variant to render. Determines styling and default semantic element.
   */
  variant: TextVariant

  /**
   * Text alignment
   * @default left
   */
  align?: NonNullable<TextVariants["align"]>

  /**
   * Additional classes to apply
   * @private
   */
  className?: string

  /**
   * HTML tag name to use for rendered element.
   * If not provided, uses semantic default based on variant.
   * @default varies by variant
   */
  as?: AsAllowedList
}

/**
 * Text component for consistent typography across the application.
 */
export const TextInternal = forwardRef<HTMLElement, TextInternalProps>(
  ({ children, variant, align, className, as, ...htmlProps }, forwardedRef) => {
    const asTag = as ?? defaultTag[variant]

    return createElement(
      asTag,
      {
        ...htmlProps,
        className: cn(textVariants({ variant, align }), className),
        ref: forwardedRef,
      },
      children
    )
  }
)

TextInternal.displayName = "TextInternal"
