/**
 * Amount cell type for displaying monetary values in data collections.
 * Similar to number cell but specifically designed for currency amounts.
 */
import { PropertyRendererMetadata } from "../types"
import { NumberCell } from "./number"
import { WithPlaceholder } from "./types"

export interface AmountValue extends WithPlaceholder {
  amount: number | undefined
  symbol?: string
  symbolPosition?: "left" | "right"
}

export type AmountCellValue = number | undefined | AmountValue

export const AmountCell = (
  args: AmountCellValue,
  meta: PropertyRendererMetadata<never>
) => {
  const amount = {
    // defaults
    symbolPosition: "right" as const,
    symbol: "",
    // if args is an object, use the amount from args, otherwise use the value
    ...(typeof args === "object" && "amount" in args
      ? args
      : {
          amount: args,
        }),
  }

  return NumberCell(
    {
      ...(typeof args === "object" && "amount" in args ? args : {}),
      number: amount.amount,
      units: amount.symbol,
      unitsPosition: amount.symbolPosition,
    },
    meta
  )
}
