import { Children, ReactElement, ReactNode, useMemo } from "react"
import { DefaultValues } from "react-hook-form"
import { z } from "zod"
import { FieldProps } from "../fields/types"

interface Return {
  schema: z.Schema
  defaultValues: DefaultValues<Record<string, unknown>>
}

const useFormSchema = (children: ReactNode): Return => {
  const fields = Children.toArray(children) as ReactElement<FieldProps>[]

  const { formSchema, defaultValues } = useMemo(
    () =>
      fields.reduce(
        (acc, x) => {
          const { message, min } = x.props

          if (min && message)
            return {
              formSchema: {
                ...acc.formSchema,
                [x.props.name]: z.string().min(min, { message }),
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
