import { IconType } from "@/components/Utilities/Icon"
import { SelectItemObject } from "@/experimental/Forms/Fields/Select"
import { DropdownItemObject } from "@/experimental/Navigation/Dropdown"
import { NavigationItem } from "@/experimental/Navigation/utils"
import { BreadcrumbSelectProps } from "./internal/BreadcrumbSelect"

type BreadcrumbBaseItemType = NavigationItem & {
  id: string
  loading?: boolean
  label: string
}

type BreadcrumbLoadingItemType = Pick<BreadcrumbBaseItemType, "id"> & {
  loading: true
}

type BreadcrumbNavItemType = BreadcrumbBaseItemType & {
  icon?: IconType
}

type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
  type: "select"
  searchbox?: boolean
  externalSearch?: boolean
  options: BreadcrumbSelectProps["options"]
  onChange: BreadcrumbSelectProps["onChange"]
  value?: string
  defaultItem?: SelectItemObject<string>
}

export type BreadcrumbItemType =
  | BreadcrumbLoadingItemType
  | BreadcrumbNavItemType
  | BreadcrumbSelectItemType

export interface BreadcrumbState {
  visibleCount: number
  headItem: BreadcrumbItemType | null
  tailItems: BreadcrumbItemType[]
  collapsedItems: BreadcrumbItemType[]
  isOnly: boolean
  minWidth: number | undefined
}

export type DropdownItemWithoutIcon = Omit<DropdownItemObject, "icon">
