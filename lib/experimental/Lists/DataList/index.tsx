import { FC, forwardRef, ReactElement } from "react"

import { IconType } from "@/components/Utilities/Icon"
import { ItemContainer } from "@/experimental/Lists/DataList/ItemContainer"
import { ItemWithCopyButton } from "@/experimental/Lists/DataList/ItemWithCopyButton"
import { LinkItem } from "@/experimental/Lists/DataList/LinkItem"

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
      <div className="min-w-32 max-w-72">
        {label && (
          <p className="mb-0.5 px-1.5 text-f1-foreground-secondary">{label}</p>
        )}
        <ul className="flex flex-col gap-0.5" ref={ref}>
          {children}
        </ul>
      </div>
    )
  }
)
_DataList.displayName = "DataList"

export type ItemProps = {
  text: string
  icon?: IconType
}

const Item = forwardRef<HTMLLIElement, ItemProps>(({ text, icon }, ref) => (
  <ItemContainer ref={ref} text={text} leftIcon={icon} />
))

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
