import { Component } from "@/lib/component"
import { Icon } from "@/lib/icons"
import { Button as ShadcnButton } from "@/ui/button"
import { ComponentProps, forwardRef } from "react"

type Props = Pick<
  ComponentProps<typeof ShadcnButton>,
  "variant" | "size" | "onClick"
> & {
  label: string
  icon?: Icon
  hideLabel?: boolean
}

const Button: React.FC<Props> = Component(
  {
    name: "Button",
    type: "action",
  },
  forwardRef<HTMLButtonElement, Props>(
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
)

export { Button }
