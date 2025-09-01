import {
  F0AvatarModule,
  F0AvatarModuleProps,
} from "@/components/avatars/F0AvatarModule"
import { Badge, BadgeProps } from "@/experimental/Information/Badge"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
  InternalAvatarProps,
} from "@/ui/Avatar"
import { forwardRef, useMemo } from "react"
import { AvatarBadge } from "../F0Avatar/types"
import { AvatarSize, avatarSizes, sizesMapping } from "./types"
import { getAvatarColor, getInitials, getMask } from "./utils"

const getBadgeSize = (size: AvatarSize): BadgeProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<AvatarSize, undefined>, BadgeProps["size"]>
  > = {
    "2xl": "lg",
    xl: "md",
    lg: "sm",
    sm: "sm",
    xs: "xs",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.sm
}

const getAvatarSize = (
  size: AvatarSize
): F0AvatarModuleProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<AvatarSize, undefined>, F0AvatarModuleProps["size"]>
  > = {
    "2xl": "md",
    xl: "sm",
    lg: "xs",
    sm: "xs",
    xs: "xxs",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.sm
}

export type BaseAvatarProps = {
  /**
   * The type of the avatar.
   */
  type: InternalAvatarProps["type"]
  /**
   * The name of the avatar.
   */
  name: string | string[]
  /**
   * The source of the avatar's image.
   */
  src?: string
  /**
   * The color of the avatar.
   * @default "random"
   */
  color?: InternalAvatarProps["color"] | "random"
  /**
   * The badge to display on the avatar. Can be a module badge or a custom badge.
   */
  badge?: AvatarBadge
} & Pick<InternalAvatarProps, "aria-label" | "aria-labelledby"> &
  (
    | {
        size: AvatarSize
      }
    | {
        /**
         * @deprecated Use AvatarSize instead (xs, sm, md, lg, xl, 2xl)
         */
        size: InternalAvatarProps["size"]
      }
  )

export const BaseAvatar = forwardRef<HTMLDivElement, BaseAvatarProps>(
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
    const reversedSizesMapping = useMemo(
      () =>
        Object.fromEntries(
          Object.entries(sizesMapping).map(([key, value]) => [value, key])
        ),
      [sizesMapping]
    )

    // Check if size is a valid avatar size
    if (!avatarSizes.includes(size)) {
      console.warn(
        `The avatar size: ${size} is deprecated. Use ${sizesMapping[size]} instead.`
      )
    }

    const initials = getInitials(name, size)
    const avatarColor =
      color === "random"
        ? getAvatarColor(Array.isArray(name) ? name.join("") : name)
        : color

    const hasAria = Boolean(ariaLabel || ariaLabelledby)

    const badgeSize = getBadgeSize(size)
    const moduleAvatarSize = getAvatarSize(size)

    const badgeContent = useMemo(
      () =>
        badge ? (
          <>
            {badge.type === "module" && (
              <F0AvatarModule module={badge.module} size={moduleAvatarSize} />
            )}
            {badge.type !== "module" && (
              <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
            )}
          </>
        ) : null,
      [badge, badgeSize, moduleAvatarSize]
    )

    return (
      <>
        <div className="relative inline-flex">
          <div
            className="h-fit w-fit"
            style={
              badge
                ? {
                    clipPath: getMask.get(
                      type === "rounded" ? "rounded" : "base",
                      size,
                      badge.type === "module" ? "module" : "default"
                    ),
                  }
                : undefined
            }
          >
            <AvatarComponent
              size={reversedSizesMapping[size] || size}
              type={type}
              color={avatarColor}
              ref={ref}
              role="img"
              aria-hidden={!hasAria}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledby}
              translate="no"
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
              {badge.tooltip ? (
                <Tooltip description={badge.tooltip}>
                  <div className="cursor-help">{badgeContent}</div>
                </Tooltip>
              ) : (
                badgeContent
              )}
            </div>
          )}
        </div>
      </>
    )
  }
)

BaseAvatar.displayName = "BaseAvatar"
