import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "cva"
import type React from "react"
import { createElement, forwardRef } from "react"

const textVariants = cva({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // Heading
      "heading-large": "text-2xl font-semibold",
      heading: "text-lg font-semibold",

      // Body
      body: "",
      description: "text-f1-foreground-secondary",

      // Label
      label: "font-semibold",
      "label-input": "font-semibold text-f1-foreground-secondary",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

type TextVariants = VariantProps<typeof textVariants>
type TextVariant = NonNullable<TextVariants["variant"]>

export interface TextInternalProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className">,
    React.RefAttributes<HTMLElement> {
  /**
   * Content to be rendered
   */
  children?: React.ReactNode

  /**
   * The text variant to render. Determines styling and default semantic element.
   */
  variant: TextVariant

  /**
   * Additional CSS classes to apply
   * Private prop
   */
  className?: string

  /**
   * HTML tag name to use for rendered element.
   * If not provided, uses semantic default based on variant.
   *
   * @default varies by variant
   */
  tagName?: keyof React.JSX.IntrinsicElements

  /**
   * HTML title attribute of the element
   */
  title?: string
}

const defaultTagNames: Record<TextVariant, keyof React.JSX.IntrinsicElements> =
  {
    "heading-large": "h1",
    heading: "h2",
    body: "p",
    description: "p",
    label: "p",
    "label-input": "label",
  }

/**
 * Text component for consistent typography across the application.
 */
export const TextInternal = forwardRef<HTMLElement, TextInternalProps>(
  (
    { children, variant, className, tagName, title, ...htmlProps },
    forwardedRef
  ) => {
    const elementTagName = tagName ?? defaultTagNames[variant]

    return createElement(
      elementTagName,
      {
        ...htmlProps,
        className: cn(textVariants({ variant }), className),
        ref: forwardedRef,
        title,
      },
      children
    )
  }
)

TextInternal.displayName = "TextInternal"
