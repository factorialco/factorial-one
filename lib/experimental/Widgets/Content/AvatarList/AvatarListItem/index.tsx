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
          <div className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1px] border-solid border-f1-background-secondary-hover">
            <Image
              alt={item.description ?? item.title}
              width={32}
              height={32}
              src={item.src}
            />
          </div>
        ) : (
          <div className="flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-[10px] border-[1px] border-solid border-f1-background-secondary-hover">
            <Icon size="md" icon={Pig} color={"rgba(100, 112, 132, 1)"} />
          </div>
        ))}
      <div className="flex w-full flex-row justify-between overflow-hidden">
        <div className="flex flex-1 flex-col gap-1 overflow-hidden">
          <p className="mt-0.5 flex-1 truncate font-medium" title={item.title}>
            {item.title}
          </p>
          {item.description && (
            <p
              className="truncate text-f1-foreground-secondary"
              title={item.description}
            >
              {item.description}
            </p>
          )}
        </div>
        <div className="flex flex-col justify-end gap-1 overflow-hidden text-end">
          <p
            className="mt-0.5 flex-1 truncate pr-2 font-medium"
            title={item.value}
          >
            {item.value}
          </p>
          <div className="flex justify-end">
            {!!item.badgeValue && (
              <BalanceTag
                text={item.badgeValue.value}
                status={item.badgeValue.type}
              />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
