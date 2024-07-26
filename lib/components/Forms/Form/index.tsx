import { Button } from "@/components/Actions/Button"
import { FC } from "react"
import { FieldValues, UseFormReturn } from "react-hook-form"

import { Form as FormProvider } from "@/ui/form"

export function Form<
  TFieldValues extends FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>({
  children,
  onSubmit,
  provider,
}: {
  onSubmit: () => void
  children: React.ReactNode
  provider: UseFormReturn<TFieldValues, TContext, TTransformedValues>
}) {
  return (
    <FormProvider {...provider}>
      <form onSubmit={onSubmit} className={"flex flex-col gap-4"}>
        {children}
      </form>
    </FormProvider>
  )
}

export const FormActions: FC<{ submitLabel: string }> = ({ submitLabel }) => (
  <div>
    <Button type="submit" label={submitLabel} />
  </div>
)
