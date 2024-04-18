import {
  Children,
  ComponentProps,
  NamedExoticComponent,
  ReactElement,
  ReactNode,
  useMemo,
} from "react"
import { DefaultValues } from "react-hook-form"
import { z } from "zod"
import DayPickerField from "../fields/DayPickerField"
import TextField from "../fields/TextField"
import { FieldProps } from "../fields/types"

interface Return {
  schema: z.Schema
  defaultValues: DefaultValues<Record<string, unknown>>
}

type NamedField<T> = ReactElement<T, NamedExoticComponent>

type Field =
  | NamedField<FieldProps>
  | NamedField<ComponentProps<typeof TextField>>
  | NamedField<ComponentProps<typeof DayPickerField>>

function isTextField(
  field: Field
): field is ReactElement<
  ComponentProps<typeof TextField>,
  NamedExoticComponent
> {
  return field.type.displayName === "TextField"
}

function isDayPickerField(
  field: Field
): field is ReactElement<
  ComponentProps<typeof DayPickerField>,
  NamedExoticComponent
> {
  return field.type.displayName === "DayPickerField"
}

const useFormSchema = (children: ReactNode): Return => {
  const fields = Children.toArray(children) as Field[]

  const processField = (
    field: NamedField<FieldProps>
  ): z.ZodType | undefined => {
    if (isTextField(field)) {
      const { min, message } = field.props

      return z.string().min(min, { message })
    }

    if (isDayPickerField(field)) {
      const { from, to, message } = field.props

      return z.date().min(from, { message }).max(to, { message })
    }
  }

  const { formSchema, defaultValues } = useMemo(
    () =>
      fields.reduce(
        (acc, x) => {
          const { message } = x.props

          if (message)
            return {
              formSchema: {
                ...acc.formSchema,
                [x.props.name]: processField(x),
              },
              defaultValues: {
                ...acc.defaultValues,
                [x.props.name]: x.props.defaultValue,
              },
            }

          return acc
        },
        { formSchema: {}, defaultValues: {} }
      ),
    []
  )

  return {
    schema: z.object(formSchema),
    defaultValues,
  }
}

export default useFormSchema
