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
  units?: string
  unitsPosition?: "left" | "right"
}

export type NumberCellValue = number | undefined | NumberValue

export const NumberCell = (
  args: NumberCellValue,
  meta: PropertyRendererMetadata<never>
) => {
  const value = resolveValue<number>(args, "number")
  const shouldShowPlaceholderStyling = isShowingPlaceholder(args, "number")

  const number = {
    // defaults
    unitsPosition: "right",
    units: "",
    // if args is an object, use the amount from args, otherwise use the value
    ...(typeof args === "object" && "number" in args
      ? args
      : {
          number: value,
        }),
  }

  return (
    <div
      className={cn(
        "text-f1-foreground",
        meta.visualization === "table" && "text-right",
        shouldShowPlaceholderStyling && "text-f1-foreground-secondary"
      )}
    >
      {number.unitsPosition === "left" && number.units && (
        <Units units={number.units} />
      )}
      {number.number?.toString() ?? ""}
      {number.unitsPosition === "right" && number.units && (
        <Units units={number.units} />
      )}
    </div>
  )
}

const Units = ({ units }: { units: string }) => {
  return <span>{units}</span>
}
