import { Icon } from "@/components/Utilities/Icon"
import { ChevronDown, ChevronUp } from "@/icons"
import { Input } from "@/ui/input"
import { forwardRef, useEffect, useState } from "react"
import { InputProps } from "../Input"

const FORMAT = /^([0-9]+)$/
// eslint-disable-next-line no-useless-escape
const FORMAT_WITH_DECIMALS = /^([0-9]+)(?:[\.,]([0-9]+)?)?$/

const parseValue = (value: string) => parseFloat(value.replace(",", "."))

type NumberInputProps = Omit<InputProps, "value" | "type" | "onChange"> & {
  locale: string
  value?: number | null
  step?: number
  min?: number
  max?: number
  maxDecimals?: number
  onChange?: (value: number | null) => void
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ locale, value, maxDecimals, step, min, max, onChange, ...props }, ref) => {
    const formatValue = (value: number, maxDecimals?: number) =>
      new Intl.NumberFormat(locale, {
        maximumFractionDigits: maxDecimals,
        useGrouping: false,
      }).format(value)

    const [fieldValue, setFieldValue] = useState<string>(() =>
      value != null ? formatValue(value, maxDecimals) : ""
    )

    const handleChange = (value: string) => {
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

    const handleStep = (type: "increase" | "decrease") => () => {
      if (!step) return
      if (value == null) {
        const initialValue = step ?? min ?? 0
        return handleChange(formatValue(initialValue, maxDecimals))
      }

      const newValue = type === "increase" ? value + step : value - step
      if ((min != null && newValue < min) || (max != null && newValue > max)) {
        return
      }

      handleChange(formatValue(newValue, maxDecimals))
    }

    const Arrows = () => {
      if (!step) return null

      return (
        <div
          className="absolute right-2 top-0.5 flex h-full flex-col group-focus-within:flex group-hover:flex"
          onClick={(e) => e.preventDefault()}
        >
          <div onClick={handleStep("increase")} className="h-4 cursor-pointer">
            <Icon size="sm" icon={ChevronUp} />
          </div>
          <div onClick={handleStep("decrease")} className="h-4 cursor-pointer">
            <Icon size="sm" icon={ChevronDown} />
          </div>
        </div>
      )
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
      <div className="group relative">
        <Input
          type="text"
          ref={ref}
          value={fieldValue}
          className="group-focus-within:pr-5 group-hover:pr-5"
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
        <Arrows />
      </div>
    )
  }
)
