import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  Button as ShadcnButton,
  iconOnlyVariants,
  iconVariants,
} from "@/ui/button"
import { ComponentProps, forwardRef, useState } from "react"

export type ButtonProps = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "disabled" | "type" | "round"
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
      variant = "default",
      size = "medium",
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
        ref={ref}
        variant={variant}
        size={size}
        round={hideLabel}
        {...props}
      >
        {icon && (
          <Icon
            size={size === "small" ? "sm" : "md"}
            icon={icon}
            className={
              hideLabel
                ? iconOnlyVariants({ variant })
                : iconVariants({ variant })
            }
          />
        )}
        {!hideLabel && label}
      </ShadcnButton>
    )
  }
)

export { Button }
