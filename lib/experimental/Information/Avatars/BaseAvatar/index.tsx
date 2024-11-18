import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/avatar"
import { ComponentProps, forwardRef } from "react"
import { getAvatarColor, getInitials } from "./utils"

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

type Props = {
  type: ShadAvatarProps["type"]
  name: string | string[]
  src?: string
  size?: ShadAvatarProps["size"]
  color?: ShadAvatarProps["color"] | "random"
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">

export const BaseAvatar = forwardRef<HTMLDivElement, Props>(
  (
    {
      src,
      name,
      size,
      type,
      color = "random",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
    },
    ref
  ) => {
    const initials = getInitials(name, size)
    const avatarColor =
      color === "random"
        ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
        : color

    const hasAria = Boolean(ariaLabel || ariaLabelledby)

    return (
      <AvatarComponent
        size={size}
        type={type}
        color={avatarColor}
        ref={ref}
        role="img"
        aria-hidden={!hasAria}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={
          src ? "dark:bg-f1-background-inverse-secondary bg-f1-background" : ""
        }
      >
        <AvatarImage src={src} alt={initials} />
        <AvatarFallback>{initials}</AvatarFallback>
      </AvatarComponent>
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
