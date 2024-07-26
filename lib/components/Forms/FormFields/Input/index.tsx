import { FieldPath, FieldValues } from "react-hook-form"
import { Input } from "../../Fields/Input"
import { FormField, FormFieldProps } from "../FormField"

export const InputFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  placeholder,
  type,
  ...props
}: FormFieldProps<TFieldValues, TName> &
  Pick<
    React.InputHTMLAttributes<HTMLInputElement>,
    "placeholder" | "type"
  >) => {
  return (
    <FormField {...props}>
      {(field) => <Input placeholder={placeholder} type={type} {...field} />}
    </FormField>
  )
}
