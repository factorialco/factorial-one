import { IconType } from "@/components/Utilities/Icon"
import { ComponentProps } from "react"
import { cn } from "../../../../../lib/utils"
import { AlertAvatar } from "../../../../Information/Avatars/AlertAvatar"
import { AvatarVariant } from "../../../../Information/Avatars/Avatar"
import { AvatarList } from "../../../../Information/Avatars/AvatarList/index.tsx"
import { EmojiAvatar } from "../../../../Information/Avatars/EmojiAvatar"

export type WidgetAvatarsListItemProps = {
  id: string | number
  title: string
  subtitle: string
  avatars: AvatarVariant[]
  remainingCount?: number
  withPointerCursor?: boolean
  onClick?: (id: string | number) => void
} & (
  | { emoji: string }
  | { alert: ComponentProps<typeof AlertAvatar>["type"]; alertIcon?: IconType }
)

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  withEmoji: boolean
  withPointerCursor: boolean
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({
  onClick,
  withEmoji,
  withPointerCursor,
  children,
}) => {
  const className = cn(
    "flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    withEmoji ? "gap-2" : "gap-2.5",
    withPointerCursor ? "cursor-pointer" : "cursor-default",
    onClick
      ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none"
      : undefined
  )
  return onClick ? (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  )
}

export function WidgetAvatarsListItem({
  id,
  title,
  subtitle,
  avatars,
  remainingCount,
  withPointerCursor = false,
  onClick,
  ...props
}: WidgetAvatarsListItemProps) {
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(id)
  }

  return (
    <Wrapper
      onClick={handleOnClick}
      withEmoji={"emoji" in props && !!props.emoji}
      withPointerCursor={withPointerCursor}
    >
      {"alert" in props && (
        <AlertAvatar type={props.alert} icon={props.alertIcon} />
      )}
      {"emoji" in props && props.emoji && <EmojiAvatar emoji={props.emoji} />}
      <div className="flex-1">
        <p className="line-clamp-1 font-medium">{title}</p>
        <p className="line-clamp-1 text-f1-foreground-secondary">{subtitle}</p>
      </div>
      <AvatarList
        avatars={avatars}
        remainingCount={remainingCount}
        size={"emoji" in props && props.emoji ? "medium" : "small"}
        type="person"
      />
    </Wrapper>
  )
}
