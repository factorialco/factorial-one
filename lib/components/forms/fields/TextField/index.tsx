import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/foundations/form"
import { Input } from "@/foundations/input"
import { FC } from "react"
import { FieldProps } from "../types"

interface Props extends FieldProps {
  label: string
  placeholder: string
  description: string
  min: number
}

const TextField: FC<Props> = ({ name, label, description, placeholder }) => (
  <FormField
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input type="text" placeholder={placeholder} {...field} />
        </FormControl>
        <FormDescription>{description}</FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
)

TextField.displayName = "TextField"

export default TextField
