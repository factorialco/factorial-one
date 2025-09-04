export const statuses = ["positive", "neutral", "negative"] as const
export type BalanceStatus = (typeof statuses)[number]

export interface NumericValue {
  number: number
  units?: string
  unitsPosition?: "left" | "right"
  decimalPlaces?: number | undefined
  locale?: string
}

export interface F0TagBalanceProps {
  percentage: number | Omit<NumericValue, "units" | "unitsPosition">
  amount: number | NumericValue
  /**
   * Inverts the balance status
   */
  inverted?: boolean
}
