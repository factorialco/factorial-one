import { Button } from "@/components/Actions/Button"

import { Form as FormProvider } from "@/ui/form"
import { FormType, InferSchema, SchemaType } from "../lib/useForm"

export function Form<
  Schema extends SchemaType,
  FormData extends InferSchema<Schema>,
>({
  onSubmit,
  children,
  ...form
}: {
  children: React.ReactNode
} & FormType<Schema, FormData>) {
  const rootError = form.formState.errors.root

  return (
    <FormProvider {...form}>
      <form onSubmit={onSubmit} className={"flex flex-col gap-4"}>
        {rootError && (
          <p className="text-f1-foreground-critical text-sm font-medium">
            {rootError.message}
          </p>
        )}
        {children}
      </form>
    </FormProvider>
  )
}

export function FormActions<
  Schema extends SchemaType,
  FormData extends InferSchema<Schema>,
>({
  submitLabel,
  form,
}: {
  submitLabel: string
  form: FormType<Schema, FormData>
}) {
  return (
    <div>
      <Button
        type="submit"
        label={submitLabel}
        loading={form.formState.isSubmitting}
      />
    </div>
  )
}
