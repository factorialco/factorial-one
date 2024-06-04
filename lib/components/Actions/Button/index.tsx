import { Button as ShadcnButton } from "@/ui/button"
import { LucideIcon } from "lucide-react"
import { ComponentProps, forwardRef } from "react"

type Props = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "onClick"
> & {
  label: string
  icon?: LucideIcon
  hideLabel?: boolean
}

const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(
  ({ label, hideLabel, icon, ...props }, ref) => {
    const Icon = icon

    return (
      <ShadcnButton
        title={hideLabel ? label : undefined}
        rounded={hideLabel}
        ref={ref}
        {...props}
      >
        {Icon && <Icon size={16} />}
        {!hideLabel && label}
      </ShadcnButton>
    )
  }
)

export { Button }
