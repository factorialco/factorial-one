import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/avatar"
import { ComponentProps, forwardRef } from "react"
import { Badge, BadgeProps } from "../../Badge"
import { ModuleAvatar } from "../../ModuleAvatar"
import { AvatarBadge } from "../types"
import { getAvatarColor, getInitials, getMask } from "./utils"

const getBadgeSize = (
  size: ShadAvatarProps["size"]
): BadgeProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<ShadAvatarProps["size"], undefined>, BadgeProps["size"]>
  > = {
    xlarge: "lg",
    large: "md",
    small: "sm",
    xsmall: "xs",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small
}

type ShadAvatarProps = ComponentProps<typeof AvatarComponent>

type Props = {
  type: ShadAvatarProps["type"]
  name: string | string[]
  src?: string
  size?: ShadAvatarProps["size"]
  color?: ShadAvatarProps["color"] | "random"
  badge?: AvatarBadge
} & Pick<ShadAvatarProps, "aria-label" | "aria-labelledby">

export const BaseAvatar = forwardRef<HTMLDivElement, Props>(
  (
    {
      src,
      name,
      size,
      type = "base",
      color = "random",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      badge,
    },
    ref
  ) => {
    const initials = getInitials(name, size)
    const avatarColor =
      color === "random"
        ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
        : color

    const hasAria = Boolean(ariaLabel || ariaLabelledby)

    const badgeSize = getBadgeSize(size)

    return (
      <div className="relative inline-flex">
        <div
          className="h-fit w-fit"
          style={badge ? { clipPath: getMask.get(type, size) } : undefined}
        >
          <AvatarComponent
            size={size}
            type={type}
            color={avatarColor}
            ref={ref}
            role="img"
            aria-hidden={!hasAria}
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledby}
            data-a11y-color-contrast-ignore
            className={
              src
                ? "bg-f1-background dark:bg-f1-background-inverse-secondary"
                : ""
            }
          >
            <AvatarImage src={src} alt={initials} />
            <AvatarFallback data-a11y-color-contrast-ignore>
              {initials}
            </AvatarFallback>
          </AvatarComponent>
        </div>
        {badge && (
          <div className="absolute -bottom-0.5 -right-0.5">
            {badge.type === "module" && (
              <ModuleAvatar module={badge.module} size={badgeSize} />
            )}
            {badge.type !== "module" && (
              <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
            )}
          </div>
        )}
      </div>
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
