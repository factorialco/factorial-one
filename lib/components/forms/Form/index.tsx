import { Button } from "@/foundations/button"
import { Form as FormProvider } from "@/foundations/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PropsWithChildren } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import useFormSchema from "../hooks/useFormSchema"

interface Props<T extends object> {
  onSubmit: SubmitHandler<T>
}

function Form<T extends object>({
  children,
  onSubmit,
}: PropsWithChildren<Props<T>>) {
  const { schema, defaultValues } = useFormSchema<T>(children)

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  )
}

export default Form
