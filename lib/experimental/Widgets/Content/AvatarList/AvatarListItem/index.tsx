import { Icon } from "@/components/Utilities/Icon"
import { Image } from "@/components/Utilities/Image"
import { BalanceTag } from "@/experimental/exports"
import { Pig } from "@/icons"
import { getWidgetListItemClassname, Wrapper } from "../../TasksList/TaskItem"

export interface AvatarListItem {
  id: string | number
  src?: string
  title: string
  description?: string
  value: string
  badgeValue?: {
    type: "positive" | "negative"
    value: string
  }
}

export interface AvatarListItemProps {
  item: AvatarListItem
  hideIcon?: boolean
  onClick?: (item: AvatarListItem) => void
}

export function AvatarListItem({
  item,
  hideIcon,
  onClick,
}: AvatarListItemProps) {
  const className = getWidgetListItemClassname(onClick !== undefined)
  const handleOnClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    ev.preventDefault()
    onClick?.(item)
  }

  return (
    <Wrapper onClick={handleOnClick} className={className}>
      {!hideIcon &&
        (item.src ? (
          <div className="flex items-center justify-center overflow-hidden rounded-[10px] border-[1px] border-solid border-f1-background-secondary-hover">
            <Image width={32} height={32} src={item.src} />
          </div>
        ) : (
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[10px] border-[1px] border-solid border-f1-background-secondary-hover">
            <Icon size="md" icon={Pig} color={"rgba(100, 112, 132, 1)"} />
          </div>
        ))}
      <div className="flex flex-1 flex-col gap-1">
        <p className="mt-0.5 line-clamp-2 flex-1 font-medium">{item.title}</p>
        {item.description && (
          <p className="line-clamp-1 text-f1-foreground-secondary">
            {item.description}
          </p>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 text-end">
        <p className="mt-0.5 line-clamp-2 flex-1 pr-2 font-medium">
          {item.value}
        </p>
        <BalanceTag
          text={item.badgeValue?.value ?? ""}
          status={item.badgeValue?.type ?? "positive"}
        />
      </div>
    </Wrapper>
  )
}
