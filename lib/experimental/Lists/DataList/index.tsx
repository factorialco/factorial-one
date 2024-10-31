import { forwardRef, ReactElement } from "react"

import { IconType } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatar"
import { AvailableColors } from "@/experimental/Layouts/Utils/helper.ts"
import { ItemContainer } from "@/experimental/Lists/DataList/ItemContainer"

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>
  label?: string
}

type Items =
  | typeof Item
  | typeof EmployeeItem
  | typeof CompanyItem
  | typeof TeamItem

export type ActionProps = CopyActionProps | NavigateActionProps

export type CopyActionProps = {
  text: string
}

export type NavigateActionProps = {
  href: string
}

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
  action?: ActionProps
}

const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ text, icon, action }, ref) => (
    <ItemContainer ref={ref} text={text} leftIcon={icon} action={action} />
  )
)

Item.displayName = "DataList.Item"

type URL = string

type EmployeeItemProps = {
  fullName: string
  avatarUrl?: URL
  action?: ActionProps
}

const EmployeeItem = forwardRef<HTMLLIElement, EmployeeItemProps>(
  ({ action, avatarUrl, fullName }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <Avatar size="xxsmall" src={avatarUrl} />}
        text={fullName}
        action={action}
      />
    )
  }
)
EmployeeItem.displayName = "EmployeeItem"

type CompanyItemProps = {
  name: string
  avatarUrl?: URL
  action?: ActionProps
}

const CompanyItem = forwardRef<HTMLLIElement, CompanyItemProps>(
  ({ avatarUrl, name, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <Avatar size="xxsmall" src={avatarUrl} />}
        text={name}
        action={action}
      />
    )
  }
)

CompanyItem.displayName = "CompanyItem"

type TeamItemProps = {
  name: string
  color?: AvailableColors
  action?: ActionProps
}

const TeamItem = forwardRef<HTMLLIElement, TeamItemProps>(
  ({ action, color, name }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <Avatar size="xxsmall" alt={name[0]} color={color} />}
        text={name}
        action={action}
      />
    )
  }
)

TeamItem.displayName = "TeamItem"

export const DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  EmployeeItem,
  TeamItem,
})
