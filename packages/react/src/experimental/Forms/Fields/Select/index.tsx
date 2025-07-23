import { OneEllipsis } from "@/components/OneEllipsis"
import { Icon } from "@/components/Utilities/Icon"
import { TagList } from "@/experimental/exports"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import {
  BaseFetchOptions,
  BaseResponse,
  DataSourceDefinition,
  FiltersDefinition,
  getDataSourcePaginationType,
  GroupingDefinition,
  PaginatedDataAdapter,
  PromiseOrObservable,
  RecordType,
  SelectedItemsState,
  SortingsDefinition,
  useData,
  useDataSource,
  useGroups,
  useSelectable,
  WithGroupId,
} from "@/hooks/datasource"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"
import { GroupHeader } from "@/ui/GroupHeader"
import { InputField, InputFieldProps } from "@/ui/InputField"
import {
  SelectContent,
  SelectItem as SelectItemPrimitive,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  VirtualItem,
} from "@/ui/Select"
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { Avatar } from "../../../Information/Avatars/Avatar"
import { Action, SelectBottomActions } from "./SelectBottomActions"
import { SelectTopActions } from "./SelectTopActions"
import type { SelectItemObject, SelectItemProps } from "./types"
export * from "./types"

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted  value
 * @template R - The type of the record/item data (used with data source)
 *
 */
export type SelectProps<T extends string, R extends RecordType = RecordType> = (
  | {
      multiple: true
      onChange: (
        value: SelectedItemsState<T>,
        originalItems?: R[],
        options?: SelectItemObject<T, R>[]
      ) => void
      onChangeSelectedOption?: (options: SelectItemObject<T, R>[]) => void
      value?: T[] | SelectedItemsState<T>
      defaultItem?: SelectItemObject<T, R>[]
    }
  | {
      multiple?: false | never
      onChange: (
        value: T,
        originalItem?: R,
        option?: SelectItemObject<T, R>
      ) => void
      onChangeSelectedOption?: (option: SelectItemObject<T, R>) => void
      value?: T
      defaultItem?: SelectItemObject<T, R>
    }
) & {
  children?: React.ReactNode
  open?: boolean
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange?: (value: string) => void
  searchValue?: string
  onOpenChange?: (open: boolean) => void
  searchEmptyMessage?: string
  className?: string
  selectContentClassName?: string
  actions?: Action[]
} & (
    | {
        source: DataSourceDefinition<
          R,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<R>
        >
        mapOptions: (item: R) => SelectItemProps<T, R>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        options: SelectItemProps<T, R>[]
      }
  ) &
  Pick<
    InputFieldProps<T>,
    | "loading"
    | "hideLabel"
    | "clearable"
    | "labelIcon"
    | "size"
    | "label"
    | "error"
    | "icon"
    | "placeholder"
    | "disabled"
    | "minWidth"
    | "maxWidth"
  >

const SelectItem = <T extends string, R>({
  item,
}: {
  item: SelectItemObject<T, R>
}) => {
  return (
    <SelectItemPrimitive value={item.value}>
      <div className="flex w-full items-start gap-1.5">
        {item.avatar && <Avatar avatar={item.avatar} size="xsmall" />}
        {item.icon && (
          <div className="text-f1-icon">
            <Icon icon={item.icon} />
          </div>
        )}
        <div className="flex flex-1 flex-col">
          <span className="line-clamp-2 font-medium">{item.label}</span>
          {item.description && (
            <div className="line-clamp-2 text-f1-foreground-secondary">
              {item.description}
            </div>
          )}
        </div>
        {item.tag && (
          <div className="self-center">
            <RawTag text={item.tag} />
          </div>
        )}
      </div>
    </SelectItemPrimitive>
  )
}

const SelectValue = forwardRef<
  HTMLDivElement,
  { item: SelectItemObject<string> | SelectItemObject<string>[] }
>(function SelectValue({ item }, ref) {
  if (Array.isArray(item)) {
    return (
      <div className="h-full w-full border-2 border-solid border-[#f00]">
        <TagList
          layout="fill"
          type="dot"
          tags={item.map((i) => ({
            text: i.label,
            type: "dot",
          }))}
        />
      </div>
    )
  }

  return (
    <div className="flex min-w-[20px] shrink items-center gap-1.5" ref={ref}>
      {item.icon && (
        <div className="h-5 shrink-0 text-f1-icon">
          <Icon icon={item.icon} />
        </div>
      )}
      <OneEllipsis className="min-w-0 shrink">{item.label}</OneEllipsis>
    </div>
  )
})

const SelectComponent = forwardRef(function Select<
  T extends string,
  R extends RecordType = RecordType,
>(
  {
    placeholder,
    onChange,
    onChangeSelectedOption,
    value,
    options = [],
    mapOptions,
    children,
    disabled,
    open,
    hideLabel,
    onOpenChange,
    showSearchBox,
    onSearchChange,
    searchBoxPlaceholder,
    searchEmptyMessage,
    size,
    selectContentClassName,
    actions,
    source,
    label,
    error,
    icon,
    labelIcon,
    clearable,
    loading,
    multiple,
    defaultItem,
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  type ValueType = typeof multiple extends true ? string[] : string
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const defaultValue = useMemo(() => {
    return multiple
      ? defaultItem?.map((item) => item.value) || []
      : defaultItem?.value
  }, [defaultItem, multiple])

  const dataSource = useMemo(() => {
    if (
      source &&
      !["infinite-scroll", "no-pagination"].includes(
        getDataSourcePaginationType(source.dataAdapter)
      )
    ) {
      throw new Error(
        "Select component only supports `infinite-scroll` or `no-pagination` pagination types"
      )
    }

    return {
      ...source,
      idProvider: (item: R) => item.value as string,
      dataAdapter: source
        ? (source.dataAdapter as PaginatedDataAdapter<R, FiltersDefinition>)
        : {
            fetchData: ({
              search,
            }: BaseFetchOptions<FiltersDefinition>): PromiseOrObservable<
              BaseResponse<R>
            > => {
              return {
                records: options.filter(
                  (option) =>
                    option.type === "separator" ||
                    !search ||
                    option.label.toLowerCase().includes(search.toLowerCase())
                ) as unknown as R[],
              }
            },
          },
    }
  }, [options, source])

  const localSource = useDataSource(
    {
      ...dataSource,
      selectable: (item) => item.value as string,
      search: showSearchBox
        ? {
            enabled: showSearchBox,
            sync: !source,
          }
        : undefined,
    },
    [options]
  )

  /**
   * Maps an item to a SelectItemProps<T, R>
   */
  const optionMapper = useCallback(
    (item: R): SelectItemProps<T, R> => {
      if (source) {
        if (!mapOptions) {
          throw new Error("mapOptions is required when using a source")
        }
        return mapOptions(item)
      }
      // At this point, we are sure that options is an array of SelectItemProps<T, R>
      return item as unknown as SelectItemProps<T, R>
    },
    [mapOptions, source]
  )

  /**
   * Handles the data fetch form source and pagination if needed
   */
  const { data, isInitialLoading, loadMore, isLoadingMore, paginationInfo } =
    useData<R>(localSource)

  /**
   * Gets the search status and handler from the local source
   */
  const { currentSearch, setCurrentSearch } = localSource

  /**
   * Handles the selection of items and groups
   * We use the more complex case (chunked data) internally, but for the single selection we will return just the selected item outside the component
   */
  const { selectedItemsInData, selectedStatus, handleSelectItemChange } =
    useSelectable(
      data,
      paginationInfo,
      localSource,
      (status) => {
        // if it single value return the select value as is
        // If muiltiple and no pagination, we return all the selected values
        // IFmultiple and p[agination we return the selections status]

        console.log("onSelectItemcallback", status)
      },
      {
        allSelected: true,
        // items: [
        //   ...(multiple ? (defaultItem ?? []) : [defaultItem])
        //     .filter((item) => item !== undefined)
        //     .map((item) => ({
        //       id: item.value,
        //       checked: true,
        //     })),
        //   ...(multiple ? (value ?? []) : [value])
        //     .filter((item) => item !== undefined)
        //     .map((item) => ({
        //       id: item.value,
        //       checked: true,
        //     })),
        // ],
      }
    )

  useEffect(() => {
    console.log("--------------------->selectedStatus", selectedStatus)
  }, [JSON.stringify(selectedStatus)])

  /**
   * The selected option(s)
   * It is used to display the selected option(s) in the input field
   * As the data is chunked, no all the items are loaded, so we need to find the options in the data records
   */
  const [selectedOption, setSelectedOption] = useState<
    SelectItemObject<T, R> | SelectItemObject<T, R>[] | undefined
  >(undefined)

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The options array if found, empty array otherwise
   */
  const findOptions = useCallback(
    (
      value: (string | T) | (string | T)[] | undefined
    ): SelectItemObject<T, R>[] => {
      const res: SelectItemObject<T, R>[] = []
      if (value === undefined) {
        return res
      }

      if (!Array.isArray(value)) {
        value = [value]
      }

      for (const option of data.records) {
        const mappedOption = optionMapper(option)
        if (
          mappedOption.type !== "separator" &&
          value.includes(mappedOption.value)
        ) {
          res.push(mappedOption)
        }
      }
      return res
    },
    [data.records, optionMapper]
  )

  // // Select options if select values changes
  // const valueString = JSON.stringify(value)
  // useEffect(
  //   () => {
  //     const foundOptions = findOptions(value)

  //     if (multiple) {
  //       onChangeSelectedOption?.(foundOptions)
  //       setSelectedOption(foundOptions)
  //     } else {
  //       onChangeSelectedOption?.(foundOptions[0])
  //       setSelectedOption(foundOptions[0])
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps -- we are checking deeply the value
  //   [optionMapper, findOptions, onChangeSelectedOption, valueString, multiple]
  // )

  useEffect(() => {
    if (open) {
      searchInputRef.current?.focus()
    }
  }, [open])

  const onSearchChangeLocal = useCallback(
    (value: string) => {
      setCurrentSearch(value)
      onSearchChange?.(value)
    },
    [setCurrentSearch, onSearchChange]
  )

  const handleLocalValueChange = (changedValue: ValueType) => {
    // setCurrentSearch(undefined)

    console.log("changedValue", changedValue)

    // const foundOptions = findOptions(changedValue)

    // if (foundOptions) {
    //   if (multiple) {
    //     const options = (foundOptions || []).filter(
    //       (option): option is SelectItemObject<T, R> => option !== undefined
    //     )
    //     onChange?.(
    //       options.map((option) => option.value),
    //       options
    //         .map((option) => option.item)
    //         .filter((item) => item !== undefined),
    //       options
    //     )
    //   } else {
    //     onChange?.(foundOptions[0].value, foundOptions[0].item, foundOptions[0])
    //   }
    // }
  }

  /**
   * When an option is checked or unchecked, we need to update the selected items status
   * @param value
   * @param checked
   */
  const handleItemCheckChange = (value: string, checked: boolean) => {
    const foundOptions = findOptions(value)
    if (foundOptions) {
      foundOptions.forEach((option) => {
        handleSelectItemChange(option as unknown as R, checked)
      })
    }
  }
  const handleChangeOpenLocal = (open: boolean) => {
    onOpenChange?.(open)
    setOpenLocal(open)
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }

  //const collapsible = localSource.grouping?.collapsible
  const defaultOpenGroups = localSource.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  const getItems = useCallback(
    (records: WithGroupId<R>[] | R[]): VirtualItem[] => {
      return records.map((option, index) => {
        const mappedOption = optionMapper(option)
        return mappedOption.type === "separator"
          ? {
              height: 1,
              item: <SelectSeparator key={`separator-${index}`} />,
            }
          : {
              height: mappedOption.description ? 64 : 32,
              item: (
                <SelectItem
                  key={String(mappedOption.value)}
                  item={mappedOption}
                />
              ),
              value: mappedOption.value,
            }
      })
    },
    [optionMapper]
  )

  const items: VirtualItem[] = useMemo(() => {
    if (data.type === "grouped") {
      const items: VirtualItem[] = []
      data.groups.map((group) => {
        items.push({
          height: 30,
          item: (
            <GroupHeader
              label={group.label}
              itemCount={group.itemCount}
              onOpenChange={(open) => setGroupOpen(group.key, open)}
              open={openGroups[group.key]}
              // showOpenChange={collapsible}
              className="px-4 py-2"
            />
          ),
        })
        items.push(...getItems(group.records))
      })
      return items
    }
    return getItems(data.records)
  }, [data.records, data.type, data.groups, getItems, openGroups, setGroupOpen])

  const handleScrollBottom = () => {
    loadMore()
  }

  useEffect(() => {
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }, [data])

  const primitiveValue = useMemo(() => {
    console.log("selectedItemsInData", selectedItemsInData)
    const selectedItemsArray = Array.from(selectedItemsInData.values()).map(
      (item) => item.value as T
    )

    return multiple ? selectedItemsArray : selectedItemsArray[0] || undefined
  }, [selectedItemsInData, multiple])

  return (
    <>
      <SelectPrimitive
        onValueChange={handleLocalValueChange}
        onItemCheckChange={handleItemCheckChange}
        value={primitiveValue}
        disabled={disabled}
        open={openLocal}
        multiple={multiple}
        onOpenChange={handleChangeOpenLocal}
        defaultValue={defaultValue}
        {...props}
      >
        <SelectTrigger ref={ref} asChild>
          {children ? (
            <div
              className="flex w-full items-center justify-between"
              aria-label={label || placeholder}
            >
              {children}
            </div>
          ) : (
            <InputField
              label={label}
              error={error}
              icon={icon}
              labelIcon={labelIcon}
              hideLabel={hideLabel}
              value={value as ValueType}
              onChange={(value) => handleLocalValueChange(value)}
              placeholder={placeholder || ""}
              disabled={disabled}
              clearable={clearable}
              size={size}
              loading={isInitialLoading || loading}
              onClickContent={() => {
                handleChangeOpenLocal(!openLocal)
              }}
              append={
                <Icon
                  onClick={() => {
                    if (disabled) return
                    handleChangeOpenLocal(!openLocal)
                  }}
                  icon={ChevronDown}
                  size="sm"
                  className={cn(
                    "rounded-2xs bg-f1-background-secondary p-0.5 transition-transform duration-200",
                    openLocal && "rotate-180",
                    !disabled && "cursor-pointer"
                  )}
                />
              }
            >
              <button
                className="flex w-full max-w-full items-center justify-between"
                aria-label={label || placeholder}
              >
                {selectedOption && <SelectValue item={selectedOption} />}
              </button>
            </InputField>
          )}
        </SelectTrigger>
        {openLocal && (
          <SelectContent
            items={items}
            className={selectContentClassName}
            emptyMessage={searchEmptyMessage}
            bottom={<SelectBottomActions actions={actions} />}
            top={
              <SelectTopActions
                searchInputRef={searchInputRef}
                searchValue={currentSearch}
                onSearchChange={onSearchChangeLocal}
                searchBoxPlaceholder={searchBoxPlaceholder}
                showSearchBox={showSearchBox}
                grouping={localSource.grouping}
                currentGrouping={localSource.currentGrouping}
                onGroupingChange={localSource.setCurrentGrouping}
              />
            }
            onScrollBottom={handleScrollBottom}
            isLoadingMore={isLoadingMore}
          ></SelectContent>
        )}
      </SelectPrimitive>
    </>
  )
})

export const Select = SelectComponent as <
  T extends string = string,
  R extends RecordType = RecordType,
>(
  props: SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
