import { Button } from "@/components/Actions/Button"
import { FC } from "react"

export { Form as FormProvider } from "@/ui/form"

export const Form: React.FC<{
  onSubmit: () => void
  children: React.ReactNode
}> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className={"flex flex-col gap-4"}>
    {children}
  </form>
)

export const FormActions: FC = () => (
  <div>
    <Button type="submit" label="Submit" />
  </div>
)
