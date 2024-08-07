import { Icon, IconType } from "@/components/Utilities/Icon"
import { Button as ShadcnButton } from "@/ui/button"
import { ComponentProps, forwardRef, useState } from "react"

export type ButtonProps = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "disabled" | "type" | "round"
> & {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<unknown>
  label: string
  loading?: boolean
  icon?: IconType
  hideLabel?: boolean
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      label,
      hideLabel,
      onClick,
      disabled,
      loading: forceLoading,
      icon,
      ...props
    },
    ref
  ) => {
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
        disabled={disabled || loading || forceLoading}
        round={hideLabel}
        ref={ref}
        {...props}
      >
        {icon && <Icon size="md" icon={icon} />}
        {!hideLabel && label}
      </ShadcnButton>
    )
  }
)

export { Button }
