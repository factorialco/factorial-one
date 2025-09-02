import { F0AvatarModule } from "@/components/avatars/F0AvatarModule"
import { Badge } from "@/experimental/Information/Badge"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import {
  Avatar as AvatarComponent,
  AvatarFallback,
  AvatarImage,
} from "@/ui/Avatar"
import { forwardRef, useMemo } from "react"
import { avatarSizes, BaseAvatarProps, sizesMapping } from "./types"
import {
  getAvatarColor,
  getAvatarSize,
  getBadgeSize,
  getInitials,
  getMask,
} from "./utils"

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
      size = sizesMapping[size]
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
