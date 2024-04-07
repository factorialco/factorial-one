import { ControllerProps, FieldPath, FieldValues } from "react-hook-form"

import { FormControl, FormField, FormItem, FormLabel } from "@/foundations/form"

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>

export const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: Props<TFieldValues, TName>) => {
  const { render } = props

  return (
    <FormField
      {...props}
      render={(args) => (
        <FormItem>
          <FormLabel className="block">Accept Terms</FormLabel>
          <FormControl>{render(args)}</FormControl>
        </FormItem>
      )}
    />
  )
}
