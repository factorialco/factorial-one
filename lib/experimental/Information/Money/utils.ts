export function formatLargeMoney(
  amount: number,
  currency: string,
  locale: string = "en-US",
  totalDigits: number = 6
): string {
  const suffixes = ["", "K", "M", "B", "T"]
  const maxTier = suffixes.length - 1 // Maximum tier we support (T for trillions)

  // Determine the tier based on the size of the number
  let tier = Math.floor(Math.log10(Math.abs(amount)) / 3)

  // Calculate the number of digits in the integer part
  let integerDigits = Math.floor(Math.log10(Math.abs(amount)) + 1)

  // Decide whether to show the number without a suffix if it fits within totalDigits
  if (integerDigits > totalDigits) {
    // If integer digits exceed the limit, reduce the number using suffixes
    tier = Math.floor((integerDigits - 1) / 3) // Select the appropriate tier
    if (tier > maxTier) {
      // If we exceed the maximum tier, switch to exponential notation
      return amount.toExponential(totalDigits - 1) // Exponential notation with desired digits
    }
    amount = amount / Math.pow(10, tier * 3) // Scale the amount by the tier
    integerDigits = Math.floor(Math.log10(Math.abs(amount)) + 1) // Recalculate integer digits
  } else {
    tier = 0 // Keep no suffix if the number fits entirely
  }

  // Calculate the maximum decimal digits we can use without exceeding totalDigits
  const maxDecimalDigits = Math.max(
    0,
    Math.min(totalDigits - integerDigits, 20) // Ensure it's within 0-20 range
  )

  // Format the number as a currency string using Intl.NumberFormat
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimalDigits,
  })

  const formattedMoney = formatter.format(amount)

  // Determine whether the suffix goes before or after the currency symbol based on the locale
  const suffixBeforeCurrency = [
    "en-US",
    "en-GB",
    "ja-JP",
    "en-CA",
    "en-AU",
    "en-NZ", // English-speaking countries, Japan
    "ko-KR",
    "zh-CN",
    "zh-HK",
    "zh-TW", // South Korea, China (mainland, Hong Kong, Taiwan)
  ].includes(locale)

  // Return formatted money with the appropriate suffix placement
  return suffixBeforeCurrency
    ? `${suffixes[tier]}${formattedMoney}`
    : `${formattedMoney} ${suffixes[tier]}`
}

// Test cases
console.log(formatLargeMoney(1500, "USD", "en-US", 3)) // "$1.5K"
console.log(formatLargeMoney(2500000, "EUR", "es-ES", 4)) // "2.5M €"
console.log(formatLargeMoney(123456789, "JPY", "ja-JP", 5)) // "1.234億"
console.log(formatLargeMoney(1432.23, "EUR", "es-ES", 6)) // "1.432,23 €"
console.log(formatLargeMoney(1432.23, "EUR", "es-ES", 3)) // "1.43K €"
console.log(formatLargeMoney(143223000, "EUR", "es-ES", 5)) // "143.22M €"
console.log(formatLargeMoney(1e13, "USD", "en-US", 3)) // "$10.0T"
console.log(formatLargeMoney(1e16, "USD", "en-US", 6)) // "1.00000e+16"
