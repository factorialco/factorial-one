import { FC, forwardRef, ReactElement } from "react"

import { Icon, IconType } from "@/components/Utilities/Icon"
import { ItemWithCopyButton } from "@/experimental/Lists/DataList/ItemWithCopyButton.tsx"
import { LinkItem } from "@/experimental/Lists/DataList/LinkItem.tsx"

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>
  label?: string
}

type Items =
  | typeof Item
  | typeof ItemWithCopyButton
  | typeof LinkItem
  | typeof EntityItem

const _DataList = forwardRef<HTMLUListElement, DataListProps>(
  ({ children, label }, ref) => {
    return (
      <ul
        className="flex min-w-32 max-w-72 flex-col gap-0.5 px-1.5 py-1"
        ref={ref}
      >
        {label && (
          <p className="px-1.5 text-f1-foreground-secondary">{label}</p>
        )}
        {children}
      </ul>
    )
  }
)
_DataList.displayName = "DataList"

export type ItemProps = {
  text: string
  icon?: IconType
}

const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ text, icon: IconComponent }, ref) => (
    <li
      className="flex rounded font-medium text-f1-foreground *:flex-1"
      ref={ref}
    >
      <div className="flex items-center gap-1.5 p-1.5">
        {IconComponent && (
          <Icon icon={IconComponent} size="md" aria-hidden="true" />
        )}
        <div className="line-clamp-2">{text}</div>
      </div>
    </li>
  )
)

Item.displayName = "DataList.Item"

const EntityItem: FC<{ type: "employee" | "company" | "team" }> = ({
  type,
}) => {
  return <li>{type}</li>
}

export const DataList = Object.assign(_DataList, {
  Item,
  ItemWithCopyButton,
  LinkItem,
  EntityItem,
})
