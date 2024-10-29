import { useTextFormatEnforcer } from "@/lib/text"
import { baseColors } from "@/tokens/colors"
import { forwardRef } from "react"
import { BaseTag } from "../BaseTag"

type NewColor = Extract<
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

interface Props {
  text: string
  color: NewColor
}

export const DotTag = forwardRef<HTMLDivElement, Props>(
  ({ text, color }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    const colorString = baseColors[color][50]

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary pl-1"
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
