import { Button } from "@/foundations/button"
import { Form as FormProvider } from "@/foundations/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PropsWithChildren } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useFormSchema from "../hooks/useFormSchema"

interface Props<T extends FieldValues> {
  onSubmit: SubmitHandler<T>
}

const Form = <T extends FieldValues>({
  children,
  onSubmit,
}: PropsWithChildren<Props<T>>) => {
  const { schema, defaultValues } = useFormSchema(children)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  // Type assertion to fix error TS2345 "T could be instantiated with a different subtype of constraint". Need to investigate
  const handleSubmit = form.handleSubmit(onSubmit as SubmitHandler<FieldValues>)

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit}>
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}

export default Form
