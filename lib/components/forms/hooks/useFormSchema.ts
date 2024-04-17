import { Children, ReactElement, ReactNode, useMemo } from "react"
import { z } from "zod"
import { FieldProps } from "../fields/types"

const useFormSchema = (children: ReactNode): z.Schema => {
  const fields = Children.toArray(children) as ReactElement<FieldProps>[]

  const formSchema = useMemo(
    () =>
      fields.reduce((acc, x) => {
        const { message, min } = x.props

        if (min && message)
          return {
            ...acc,
            [x.props.name]: z.string().min(min, { message }),
          }

        return acc
      }, {}),
    [fields]
  )

  return z.object(formSchema)
}

export default useFormSchema
