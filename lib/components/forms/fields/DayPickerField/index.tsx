import { FC } from "react"

import { DayPicker } from "@/foundations/day-picker"
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/foundations/form"
import { FieldProps } from "../types"

interface Props extends FieldProps {
  label: string
  description: string
  from: Date
  to: Date
}

const DayPickerField: FC<Props> = ({ name, label, description }) => (
  <FormField
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <DayPicker value={field.value} onChange={field.onChange} />
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
)

DayPickerField.displayName = "DayPickerField"

export default DayPickerField
