import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const boxVariants = cva("", {
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto",
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16",
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16",
    },
    basis: {
      "0": "basis-0",
    },
    inline: {
      true: "inline-flex",
      false: "flex",
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0",
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0",
    },
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: false,
  },
})

export type BoxRef = HTMLDivElement
export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof boxVariants>

export const Box = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof boxVariants>
>(
  (
    {
      className,
      grow,
      basis,
      shrink,
      paddingX,
      paddingY,
      inline,
      overflow,
      ...props
    },
    ref
  ) => (
    <div
      className={cn(
        boxVariants({
          paddingX,
          basis,
          paddingY,
          grow,
          shrink,
          inline,
          overflow,
        }),
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
