import { Button } from "@/core/components/actions/Button"

import { Form as FormProvider } from "@/core/internal/form.tsx"
import { FormType, InferSchema, SchemaType } from "../lib/useForm.tsx"

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
          <p className="text-sm font-medium text-f1-foreground-critical">
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
