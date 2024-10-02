export function formatLargeMoney(
  amount: number,
  currency: string,
  locale: string = "en-US",
  totalDigits: number = 6
): string {
  if (!totalDigits || totalDigits < 2 || totalDigits > 20) {
    return (amount + " ")[0]
  }
  // Format the number as a currency string using Intl.NumberFormat
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    currencyDisplay: "narrowSymbol",
    notation: "compact",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    minimumSignificantDigits: 2,
    maximumSignificantDigits: totalDigits,
  })

  // Return formatted money with the appropriate suffix placement
  return formatter.format(amount)
}
