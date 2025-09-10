export const statuses = ["positive", "neutral", "negative"] as const
export type BalanceStatus = (typeof statuses)[number]

export interface NumericValue {
  number: number
  units?: string
  unitsPosition?: "left" | "right"
  decimalPlaces?: number | undefined
  locale?: string
}

export type F0TagBalanceProps = {
  /**
   * Inverts the balance status color. Is useful when a negative percent mean something positive.
   */
  invertStatus?: boolean
  /**
   * Hint text to display next to the tag (This text is not displayed when the balance is null or undefined)
   */
  hint?: string
  /**
   * Info text to display an i icon and a tooltip next to the tag
   */
  info?: string

  /**
   * Text to display when the balance is null or undefined
   */
  nullText?: string

  /**
   * Amount to display next to the tag
   */
  amount?: number | NumericValue | null
} & (
  | {
      percentage: number | Omit<NumericValue, "units" | "unitsPosition">
    }
  | {
      percentage?: null
    }
)
