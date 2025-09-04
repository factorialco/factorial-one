import { F0Icon, IconType } from "@/components/F0Icon"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { numberFormat } from "@/lib/numberFormat"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { BaseTag } from "../internal/BaseTag"
import type { BalanceStatus, F0TagBalanceProps, NumericValue } from "./types"

const iconMap: Record<Exclude<BalanceStatus, "neutral">, IconType> = {
  positive: ArrowUp,
  negative: ArrowDown,
}

const toNumericValue = (
  value: number | NumericValue,
  decimalPlaces: number,
  units: string,
  unitsPosition: "left" | "right",
  locale: string = "en-US"
): Required<NumericValue> => {
  if (typeof value === "number") {
    return { number: value, decimalPlaces, units, unitsPosition, locale }
  }
  // Default options if not provided
  return { decimalPlaces, units, unitsPosition, locale, ...value }
}

const numericFormatter = (value: Required<NumericValue>) => {
  return [
    value.unitsPosition === "left" && value.units ? `${value.units} ` : "",
    numberFormat(value.number, value.decimalPlaces, value.locale),
    value.unitsPosition === "right" && value.units ? ` ${value.units}` : "",
  ]
    .filter(Boolean)
    .join("")
}

export const F0TagBalance = forwardRef<HTMLDivElement, F0TagBalanceProps>(
  ({ percentage, amount, inverted, info, hint }, ref) => {
    const perventageDef = toNumericValue(percentage, 2, "%", "right")
    const amountDef = toNumericValue(amount, 2, "", "right")

    const status =
      perventageDef.number > 0
        ? "positive"
        : perventageDef.number < 0
          ? "negative"
          : "neutral"

    const perventageText = numericFormatter(perventageDef)
    const amountText = numericFormatter(amountDef)

    const text = `${perventageText} · ${amountText}`
    const additionalAccesibleText = `${status} balance`

    return (
      <BaseTag
        ref={ref}
        className={cn(
          {
            positive: "bg-f1-background-positive text-f1-foreground-positive",
            neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
            negative: "bg-f1-background-critical text-f1-foreground-critical",
          }[status]
        )}
        info={info}
        hint={hint}
        left={
          status === "neutral" ? null : (
            <F0Icon
              icon={iconMap[status]}
              size="sm"
              className={cn(
                {
                  positive: "text-f1-icon-positive",
                  neutral: "text-f1-icon-secondary",
                  negative: "text-f1-icon-critical",
                }[status]
              )}
            />
          )
        }
        additionalAccesibleText={additionalAccesibleText}
        text={text}
      />
    )
  }
)

F0TagBalance.displayName = "F0TagBalance"
