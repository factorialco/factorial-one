import { ButtonProps } from "@/factorial-one"
import { Button } from "../../../components/Actions/Button"
import UpsellIcon from "../../../icons/app/Upsell"

export interface UpsellingButtonProps
  extends Omit<ButtonProps, "variant" | "icon"> {
  /**
   * El texto que se mostrará en el botón
   */
  label: string
  /**
   * Si se debe mostrar el icono de Upsell. Por defecto es true.
   */
  showIcon?: boolean
}

export const UpsellingButton = ({
  label,
  showIcon = true,
  ...props
}: UpsellingButtonProps) => {
  return (
    <Button
      variant="promote"
      label={label}
      icon={showIcon ? UpsellIcon : undefined}
      {...props}
    />
  )
}
