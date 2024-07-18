import { Button as ShadcnButton } from "@/ui/button"
import { LucideIcon } from "lucide-react"
import { ComponentProps, forwardRef, useState } from "react"

export type ButtonProps = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "disabled"
> & {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<unknown>
  label: string
  icon?: LucideIcon
  hideLabel?: boolean
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ label, hideLabel, onClick, disabled, icon, ...props }, ref) => {
  const Icon = icon
  const [loading, setLoading] = useState(false)

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const result = onClick?.(event)

    if (result instanceof Promise) {
      setLoading(true)

      try {
        await result
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <ShadcnButton
      title={hideLabel ? label : undefined}
      onClick={handleClick}
      disabled={disabled || loading}
      rounded={hideLabel}
      ref={ref}
      {...props}
    >
      {Icon && <Icon size={16} />}
      {!hideLabel && label}
    </ShadcnButton>
  )
})

export { Button }
