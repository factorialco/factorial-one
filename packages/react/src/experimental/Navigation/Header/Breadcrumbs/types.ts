import { IconType } from "@/components/Utilities/Icon"
import { FiltersDefinition } from "@/experimental/exports"
import {
  SelectItemObject,
  SelectItemProps,
} from "@/experimental/Forms/Fields/Select"
import { ModuleId } from "@/experimental/Information/ModuleAvatar"
import { DropdownItemObject } from "@/experimental/Navigation/Dropdown"
import { NavigationItem } from "@/experimental/Navigation/utils"
import {
  DataSourceDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
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
  module?: ModuleId
  // @deprecated This property will be removed soon. Use the `module` property instead.
  icon?: IconType
}

type BreadcrumbSelectItemType = BreadcrumbBaseItemType & {
  type: "select"
  searchbox?: boolean
  externalSearch?: boolean
  onChange: BreadcrumbSelectProps<string>["onChange"]
  value?: string
  defaultItem?: SelectItemObject<string>
} & (
    | {
        source: DataSourceDefinition<
          RecordType,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<RecordType>
        >
        mapOptions: (item: RecordType) => SelectItemProps<string>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        options: SelectItemProps<string>[]
      }
  )

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
