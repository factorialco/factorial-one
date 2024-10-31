import { forwardRef, ReactElement } from "react"

import { IconType } from "@/components/Utilities/Icon"
import { Avatar } from "@/experimental/Information/Avatar"
import { AvailableColors } from "@/experimental/Layouts/Utils/helper.ts"
import {
  InternalActionType,
  ItemContainer,
} from "@/experimental/Lists/DataList/ItemContainer"

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>
  label?: string
}

type Items =
  | typeof Item
  | typeof EmployeeItem
  | typeof CompanyItem
  | typeof TeamItem

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
  action?: ActionType
}

export type ActionType = CopyActionType | NavigateActionType

export type CopyActionType = {
  type: "copy"
  text?: string
}

export type NavigateActionType = {
  type: "navigate"
  href: string
}

const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ text, icon, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        text={text}
        leftIcon={icon}
        action={getInternalAction(action, text)}
      />
    )
  }
)

Item.displayName = "DataList.Item"

type URL = string

type EmployeeItemProps = {
  fullName: string
  avatarUrl?: URL
  action?: ActionType
}

const EmployeeItem = forwardRef<HTMLLIElement, EmployeeItemProps>(
  ({ action, avatarUrl, fullName }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <Avatar size="xxsmall" src={avatarUrl} />}
        text={fullName}
        action={getInternalAction(action, fullName)}
      />
    )
  }
)
EmployeeItem.displayName = "EmployeeItem"

type CompanyItemProps = {
  name: string
  avatarUrl?: URL
  action?: ActionType
}

const CompanyItem = forwardRef<HTMLLIElement, CompanyItemProps>(
  ({ avatarUrl, name, action }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <Avatar size="xxsmall" src={avatarUrl} />}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

CompanyItem.displayName = "CompanyItem"

type TeamItemProps = {
  name: string
  color?: AvailableColors
  action?: ActionType
}

const TeamItem = forwardRef<HTMLLIElement, TeamItemProps>(
  ({ action, color, name }, ref) => {
    return (
      <ItemContainer
        ref={ref}
        leftIcon={() => <Avatar size="xxsmall" alt={name[0]} color={color} />}
        text={name}
        action={getInternalAction(action, name)}
      />
    )
  }
)

TeamItem.displayName = "TeamItem"

/**
 * convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
const getInternalAction = (
  action: ActionType | undefined,
  defaultCopyText: string
): InternalActionType | undefined => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText }
  }

  return action
}

export const DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  EmployeeItem,
  TeamItem,
})
