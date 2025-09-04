import { cn } from "@/lib/utils"
import type React from "react"
import { createElement, forwardRef, type ReactNode } from "react"
import { OneEllipsis } from "../OneEllipsis"
import {
  type AsAllowedList,
  type TextVariant,
  type TextVariants,
} from "./types"
import { defaultTag, textVariants } from "./variants"

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
  variant?: TextVariant

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

  /**
   * Enable text ellipsis with optional line configuration
   * - `true`: Single line ellipsis (lines = 1)
   * - `number`: Multi-line ellipsis with specified line count
   * - `undefined`: No ellipsis
   */
  ellipsis?: boolean | number

  /**
   * Disable tooltip when text is truncated
   * Only applies when ellipsis is enabled
   * @default false
   */
  noEllipsisTooltip?: boolean
}

/**
 * Text component for consistent typography across the application.
 */
export const TextInternal = forwardRef<HTMLElement, TextInternalProps>(
  (
    {
      children,
      variant,
      align,
      className,
      as,
      ellipsis,
      noEllipsisTooltip,
      ...htmlProps
    },
    forwardedRef
  ) => {
    const asTag = as ?? defaultTag[variant ?? "body"]

    // If ellipsis is enabled, wrap with the ellipsis component
    if (ellipsis !== undefined) {
      const lines = typeof ellipsis === "number" ? ellipsis : 1

      return (
        <OneEllipsis
          ref={forwardedRef}
          lines={lines}
          noTooltip={noEllipsisTooltip}
          tag={asTag}
          className={cn(textVariants({ variant, align }), className)}
          {...htmlProps}
        >
          {children as string}
        </OneEllipsis>
      )
    }

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
