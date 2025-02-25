import { ModuleAvatar } from "@/core/components/experimental/Information/ModuleAvatar"
import { IconType } from "@/core/components/utility/Icon"
import { Bell as BellIcon } from "@/icons/app"
import { cn } from "@/lib/utils.ts"

type Props<Id extends string | number = string | number> = {
  id: Id
  icon?: IconType
  title: string
  subtitle: string
  onClick?: (id: Id) => void
}

export type WidgetInboxListItemProps<
  Id extends string | number = string | number,
> = Props<Id>

type WrapperProps = {
  onClick?: (ev: React.MouseEvent<HTMLAnchorElement>) => void
  className: string
  children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ onClick, className, children }) => {
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

export function WidgetInboxListItem({
  id,
  title,
  subtitle,
  icon = BellIcon,
  onClick,
}: Props) {
  const className = cn(
    "flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground",
    onClick
      ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none"
      : undefined
  )
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(id)
  }

  return (
    <Wrapper onClick={handleOnClick} className={className}>
      <ModuleAvatar icon={icon} size="md" />
      <div className="flex-1">
        <p className="line-clamp-1 font-medium">{title}</p>
        <p className="line-clamp-1 text-f1-foreground-secondary">{subtitle}</p>
      </div>
    </Wrapper>
  )
}
