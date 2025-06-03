import { cn } from "@/lib/utils"
import { isShowingPlaceholder, resolveValue } from "../property-utils"
import { PropertyRendererMetadata } from "../types"
import { WithPlaceholder } from "./types"

export interface AmountValue extends WithPlaceholder {
  amount: number | undefined
}

export type AmountCellValue = number | undefined | AmountValue

export const AmountCell = (
  args: AmountCellValue,
  meta: PropertyRendererMetadata<never>
) => {
  const value = resolveValue<number>(args, "amount")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "amount")

  return (
    <div
      className={cn(
        "text-f1-foreground",
        meta.visualization === "table" && "text-right",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
      )}
    >
      {value}
    </div>
  )
}
