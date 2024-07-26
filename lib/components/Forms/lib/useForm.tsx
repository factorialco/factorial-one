import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, UseFormProps } from "react-hook-form"

import { z, ZodType } from "zod"

export const buildFormSchema = z.object
export const stringField = z.string

export { useForm }
type SchemaType = ZodType
export type InferSchema<T extends SchemaType> = z.infer<T>

export function useFormSchema<
  T extends SchemaType,
  FormType extends InferSchema<T>,
>(
  schema: T,
  options: UseFormProps<FormType>,
  onSubmit: (data: FormType) => void
) {
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    ...options,
  })

  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
