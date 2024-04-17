import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/foundations/form"
import { Select, SelectTrigger, SelectValue } from "@/foundations/select"
import { FC } from "react"
import { FieldProps } from "../types"

interface Props extends FieldProps {
  label: string
  placeholder: string
  description: string
}

const SelectField: FC<Props> = ({ name, label, description, placeholder }) => (
  <FormField
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value} />

        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </Select>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
)

SelectField.displayName = "SelectField"

export default SelectField
