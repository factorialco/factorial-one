import { Badge, BadgeProps } from "@/experimental/Information/Badge"
import {
  ModuleAvatar,
  ModuleAvatarProps,
} from "@/experimental/Information/ModuleAvatar"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, sizes } from "@/ui/avatar"
import { ElementRef, forwardRef, useMemo } from "react"
import { AvatarBadge } from "../F0Avatar/types"
import { FileDef } from "./types"
import { getFileTypeInfo } from "./utils"

type F0AvatarFileSize = Extract<
  (typeof sizes)[number],
  "small" | "medium" | "large"
>

const getBadgeSize = (
  size?: F0AvatarFileSize
): BadgeProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<F0AvatarFileSize, undefined>, BadgeProps["size"]>
  > = {
    large: "sm",
    small: "sm",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small
}

const getAvatarSize = (
  size?: F0AvatarFileSize
): ModuleAvatarProps["size"] | undefined => {
  const sizeMap: Partial<
    Record<Exclude<F0AvatarFileSize, undefined>, ModuleAvatarProps["size"]>
  > = {
    large: "xs",
    small: "xs",
  } as const

  return size && sizeMap[size] ? sizeMap[size] : sizeMap.small
}

export type F0AvatarFileProps = Omit<
  React.ComponentPropsWithoutRef<typeof Avatar>,
  "type"
> & {
  file: FileDef
  size?: F0AvatarFileSize
  badge?: AvatarBadge
}

const F0AvatarFile = forwardRef<ElementRef<typeof Avatar>, F0AvatarFileProps>(
  ({ file, badge, className, ...props }, ref) => {
    const { type: fileType, color: fileColor } = getFileTypeInfo(file)

    const badgeSize = getBadgeSize(props.size)
    const moduleAvatarSize = getAvatarSize(props.size)

    const badgeContent = useMemo(
      () =>
        badge ? (
          <>
            {badge.type === "module" && (
              <ModuleAvatar module={badge.module} size={moduleAvatarSize} />
            )}
            {badge.type !== "module" && (
              <Badge type={badge.type} icon={badge.icon} size={badgeSize} />
            )}
          </>
        ) : null,
      [badge, badgeSize, moduleAvatarSize]
    )

    return (
      <Avatar
        ref={ref}
        className={cn("overflow-visible bg-f1-background", className)}
        {...props}
      >
        <AvatarFallback className={cn("text-xs font-semibold", fileColor)}>
          {fileType}
        </AvatarFallback>
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
      </Avatar>
    )
  }
)
F0AvatarFile.displayName = "F0AvatarFile"

export { F0AvatarFile, type FileDef }
