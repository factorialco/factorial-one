import { Checkbox as ShadcnInput } from "@/ui/checkbox"

type CheckboxProps = Omit<
  React.ComponentPropsWithoutRef<typeof ShadcnInput>,
  "asChild"
> & {
  title?: string
}

const Checkbox: React.FC<CheckboxProps> = ShadcnInput

export default Checkbox
