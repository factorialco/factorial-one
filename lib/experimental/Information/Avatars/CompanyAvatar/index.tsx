import { ComponentProps } from "react"
import { BaseAvatar } from "../BaseAvatar"

type BaseAvatarProps = ComponentProps<typeof BaseAvatar>

type Props = {
  name: string
  src?: string
  size?: BaseAvatarProps["size"]
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">

export const CompanyAvatar = ({
  name,
  src,
  size,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: Props) => {
  return (
    <BaseAvatar
      type="base"
      name={name}
      src={src}
      size={size}
      color="viridian"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    />
  )
}

CompanyAvatar.displayName = "CompanyAvatar"
