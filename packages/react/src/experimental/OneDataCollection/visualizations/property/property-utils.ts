import {
  AmountValue,
  DateValue,
  NumberValue,
  TextValue,
} from "@/experimental/OneDataCollection/visualizations/property"

export type ValueKey = "text" | "number" | "date" | "amount"

export type ValueObject = TextValue | NumberValue | DateValue | AmountValue

/**
 * Checks if a value object has a placeholder property
 */
export function hasPlaceholder(args: unknown): args is { placeholder: string } {
  return (
    typeof args === "object" &&
    args !== null &&
    "placeholder" in args &&
    typeof args.placeholder === "string"
  )
}
