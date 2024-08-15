import { forwardRef, useEffect, useState } from "react"
import { Input, InputProps } from "../Input"

const FORMAT = /^([0-9]+)$/
// eslint-disable-next-line no-useless-escape
const FORMAT_WITH_DECIMALS = /^([0-9]+)(?:[\.,]([0-9]+)?)?$/

const parseValue = (value: string) => parseFloat(value.replace(",", "."))

type NumberInputProps = Omit<InputProps, "value" | "type" | "onChange"> & {
  locale: string
  value?: number
  maxDecimals?: number
  onChange?: (value: number | null) => void
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ locale, value, maxDecimals, onChange, ...props }, ref) => {
    const formatValue = (value: number, maxDecimals?: number) =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: maxDecimals,
        useGrouping: false,
      }).format(value)

    const [fieldValue, setFieldValue] = useState<string>(() =>
      value != null ? formatValue(value, maxDecimals) : ""
    )

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      if (!value) {
        setFieldValue("")
        return onChange?.(null)
      }

      const match = value.match(
        maxDecimals !== 0 ? FORMAT_WITH_DECIMALS : FORMAT
      )
      if (!match) return

      const [_, integers, decimals] = match
      if (maxDecimals && decimals && decimals.length > maxDecimals) return

      const valueWithNoLeadingZero = value.match(/^0\d$/)
        ? value.slice(1)
        : value

      const valueAsNumber = parseFloat(`${integers}.${decimals ?? 0}`)

      setFieldValue(valueWithNoLeadingZero)
      onChange?.(valueAsNumber)
    }

    // We need the logic "parseValue(fieldValue) !== value" below to ensure we don't remove the decimal separator while the user is modifying the decimals.
    // For example, if the input value is 18,3 and I want to change it to 18,5. I'll delete the last digit and the input will become "18,"
    // At this point, we have fired the "onChange" callback with the value 18 because it's the most precise valid value ("18," isn't a valid one),
    // then the useEffect below will be triggered, since the "value" changed from "18,3" to "18", and it'll not modify the "fieldValue" to keep the decimal separator
    // unless if the value really changed.
    useEffect(() => {
      if (value === null) return setFieldValue("")
      if (value != null && parseValue(fieldValue) !== value)
        setFieldValue(formatValue(value, maxDecimals))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fieldValue, value])

    return (
      <Input
        type="text"
        ref={ref}
        value={fieldValue}
        onChange={handleChange}
        {...props}
      />
    )
  }
)
