import { forwardRef } from "react"
import { useTextFormatEnforcer } from "../../../../lib/text"
import { baseColors } from "../../../../tokens/colors"
import { BaseTag } from "../BaseTag"

export type NewColor = Extract<
  keyof typeof baseColors,
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

export interface DotTagProps {
  text: string
  color: NewColor
}

export const DotTag = forwardRef<HTMLDivElement, DotTagProps>(
  ({ text, color }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    const colorString = baseColors[color][50]

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary"
        left={
          <div
            className="m-1 aspect-square w-2 rounded-full"
            style={{
              backgroundColor: `hsl(${colorString})`,
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
