import { baseColors } from "@factorialco/factorial-one-core"
import { forwardRef } from "react"
import { useTextFormatEnforcer } from "../../../../lib/text"
import { BaseTag } from "../BaseTag"

type BaseColor = keyof typeof baseColors

export type NewColor = Extract<
  BaseColor,
  | "viridian"
  | "malibu"
  | "yellow"
  | "purple"
  | "lilac"
  | "barbie"
  | "smoke"
  | "army"
  | "flubber"
  | "indigo"
  | "camel"
>

export const dotTagColors = Object.keys(baseColors) as NewColor[]

export type DotTagProps = {
  text: string
} & ({ color: NewColor } | { customColor: string })

export const DotTag = forwardRef<HTMLDivElement, DotTagProps>(
  ({ text, ...props }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    const backgroundColor =
      "color" in props && props.color
        ? `hsl(${baseColors[props.color][50]})`
        : "customColor" in props && props.customColor

    if (!backgroundColor) return null

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary"
        left={
          <div
            className="m-1 aspect-square w-2 rounded-full"
            style={{
              backgroundColor,
            }}
            aria-hidden
          />
        }
        text={text}
      />
    )
  }
)

DotTag.displayName = "DotTag"
