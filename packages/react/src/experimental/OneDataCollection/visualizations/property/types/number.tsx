/**
 * Number cell type for displaying numeric values in data collections.
 * Supports both direct number values and objects with placeholder states.
 */
import { cn } from "@/lib/utils"
import { isShowingPlaceholder, resolveValue } from "../property-utils"
import { PropertyRendererMetadata } from "../types"
import { WithPlaceholder } from "./types"

interface NumberValue extends WithPlaceholder {
  number: number | undefined
}

export type NumberCellValue = number | undefined | NumberValue

export const NumberCell = (
  args: NumberCellValue,
  meta: PropertyRendererMetadata<never>
) => {
  const value = resolveValue<number>(args, "number")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "number")

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
