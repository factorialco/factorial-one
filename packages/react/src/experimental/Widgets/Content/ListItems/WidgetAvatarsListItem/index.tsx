import { cn } from "../../../../../lib/utils"
import { AvatarVariant } from "../../../../Information/Avatars/Avatar"
import { AvatarList } from "../../../../Information/Avatars/AvatarList/index.tsx"
import { EmojiAvatar } from "../../../../Information/Avatars/EmojiAvatar"

type Props<Id extends string | number = string | number> = {
  id: Id
  emoji: string
  title: string
  subtitle: string
  avatars: AvatarVariant[]
  onClick?: (id: Id) => void
}

export type WidgetAvatarsListItemProps<
  Id extends string | number = string | number,
> = Props<Id>

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ onClick, children }) => {
  const className = cn(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    onClick
      ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none"
      : undefined
  )
  return onClick ? (
    <a className={className} onClick={onClick} tabIndex={0}>
      {children}
    </a>
  ) : (
    <div className={className} tabIndex={-1}>
      {children}
    </div>
  )
}

export function WidgetAvatarsListItem({
  id,
  title,
  subtitle,
  emoji,
  avatars,
  onClick,
}: Props) {
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(id)
  }

  return (
    <Wrapper onClick={handleOnClick}>
      <EmojiAvatar emoji={emoji} size="md" />
      <div className="flex-1">
        <p className="line-clamp-1 font-medium">{title}</p>
        <p className="line-clamp-1 text-f1-foreground-secondary">{subtitle}</p>
      </div>
      <AvatarList avatars={avatars} size="medium" type="person" />
    </Wrapper>
  )
}
