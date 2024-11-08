import { Icon, IconType } from "@/components/Utilities/Icon"
import { Counter } from "@/experimental/Information/Counter"
import { AlertTag } from "@/experimental/Information/Tags/AlertTag"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export type Props<Id extends string | number = string | number> = {
  id: Id
  title: string
  icon?: IconType
  iconClassName?: string
  count?: number
  alert?: ComponentProps<typeof AlertTag>
  rawTag?: ComponentProps<typeof RawTag>
  onClick?: (id: Id) => void
}

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

export function WidgetSimpleListItem({
  id,
  title,
  alert,
  rawTag,
  count,
  icon,
  iconClassName = "text-f1-icon-secondary",
  onClick,
}: Props) {
  const className = cn(
    "flex flex-row items-center gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground",
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
      {icon && <Icon icon={icon} size="md" className={iconClassName} />}
      <p className="mt-0.5 line-clamp-2 flex-1 font-medium">{title}</p>
      <div className="flex flex-row items-center gap-2">
        {alert && <AlertTag {...alert} />}
        {rawTag && <RawTag {...rawTag} />}
        {!!count && <Counter value={count} />}
      </div>
    </Wrapper>
  )
}
