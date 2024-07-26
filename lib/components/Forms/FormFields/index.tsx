import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form"
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import { Input } from "../Fields/Input"

type InputFormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Pick<ControllerProps<TFieldValues, TName>, "name" | "control"> & {
  label: string
  description?: string
  placeholder?: string
}

export const InputFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  label,
  description,
  placeholder,
  ...props
}: InputFormFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
