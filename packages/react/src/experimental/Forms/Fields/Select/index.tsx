import { Icon } from "@/components/Utilities/Icon"
import { SelectItem } from "./components/SelectItem"
import { SelectValue } from "./components/SelectedValue"

import {
  BaseFetchOptions,
  BaseResponse,
  FiltersDefinition,
  getDataSourcePaginationType,
  PaginatedDataAdapter,
  PromiseOrObservable,
  RecordType,
  SelectionState,
  useData,
  useDataSource,
  useGroups,
  useSelectable,
  WithGroupId,
} from "@/hooks/datasource"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"
import { GroupHeader } from "@/ui/GroupHeader"
import { InputField } from "@/ui/InputField"
import {
  SelectContent,
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
import { SelectBottomActions } from "./SelectBottomActions"
import { SelectTopActions } from "./SelectTopActions"
import type { SelectItemObject, SelectItemProps, SelectProps } from "./types"
export * from "./types"

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
    name,
    multiple,
    defaultItem,
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const [localValue, setLocalValue] = useState<T[] | undefined>(undefined)

  // useEffect(() => {
  //   const defaultValue = multiple
  //     ? (defaultItem || []).map((item) => item.value)
  //     : [defaultItem?.value]

  //   const localValue = value || defaultValue || []

  //   setLocalValue(Array.isArray(localValue) ? localValue : [localValue])
  // }, [defaultItem, value, multiple])

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
      // Set the items id to the value of the item
      selectable: (item) => String(item.value),
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

  const { data, isInitialLoading, loadMore, isLoadingMore, paginationInfo } =
    useData<R>(localSource)

  const { currentSearch, setCurrentSearch } = localSource

  const [selectedItems, setSelectedItems] = useState<
    | (typeof multiple extends true
        ? SelectItemObject<T, R>[]
        : SelectItemObject<T, R>)
    | undefined
  >(undefined)

  /**
   * Handles the selection of items and groups
   * We use the more complex case (chunked data) internally, but for the single selection we will return just the selected item outside the component
   */

  const handleSelectionStatusChange = useCallback(
    (state: SelectionState) => {
      const notPaginated =
        getDataSourcePaginationType(localSource.dataAdapter) === "no-pagination"

      console.log("handleSelectionStatusChange", state)
      if (notPaginated) {
        if (!multiple) {
          if (!Array.from(state.items.entries())?.[0]) {
            onChange?.(undefined, undefined, undefined)
            return
          }
          const [itemId, checked] = Array.from(state.items.entries())[0]
          setLocalValue([itemId as T])
          setPrimitiveValue(itemId as T)
          onChange?.(checked ? (itemId as T) : undefined, undefined, undefined)
        } else {
          const selectedItems = Array.from(state.items.entries())
            .filter(([_, checked]) => checked)
            .map(([itemId]) => itemId as T)

          console.log("selectedItems", state.items.entries(), selectedItems)
          //setSelectedItems(selectedItems)
          setLocalValue(selectedItems)
          setPrimitiveValue(selectedItems)
          onChange?.(selectedItems, undefined, undefined)
        }
        // const selectedItems = state.items.entries()
        //   .filter(([_, checked]) => checked)
        //   .map(([itemId]) => itemId)
        // const selectedItemsValues = selectedItems.map((item) => item.value as T)
        // if (multiple) {
        //   setSelectedItems(selectedItems)
        //   setPrimitiveValue(selectedItemsValues)
        //   onChange?.(
        //     selectedItemsValues,
        //     selectedItems,
        //     findOptions(selectedItemsValues)
        //   )
        // } else {
        //   console.log(
        //     "selectedItems **************",
        //     selectedItems[0],
        //     selectedItemsValues[0]
        //   )
        //   setSelectedItems(selectedItems[0])
        //   setPrimitiveValue(selectedItemsValues[0])
        //   onChange?.(
        //     selectedItemsValues[0],
        //     selectedItems[0],
        //     findOptions(selectedItemsValues)[0]
        //   )
        // }
      }
      // If not paginated we convert the select status to an array of items
      return

      if (notPaginated || !multiple) {
        // Aa no pagination we return the real selected data not the definition of the selection
        const items = status.itemsStatus
          .filter((item) => item.checked)
          .map((item) => ({
            value: item.item.value,
            item: item.item,
            option: item.item,
          }))

        const values = items.map((item) => item.value as T)

        // if (multiple) {
        //   onChange?.(
        //     values,
        //     items.map((item) => item.item),
        //     findOptions(values)
        //   )
        //   setSelectedOptions(findOptions(values))
        // } else {
        //   const value = values[0]
        //   const item = items[0]?.item
        //   const option = findOptions(value)?.[0]
        //   onChange?.(value, item, option)
        //   setSelectedOptions(option)
        // }
      } else {
        onChange?.(status)
      }
    },
    [multiple, onChange, localSource.dataAdapter]
  )

  const { handleSelectItemChange, handleSelectAll } = useSelectable(
    data,
    paginationInfo,
    localSource,
    handleSelectionStatusChange,
    multiple
  )

  // /**
  //  * Finds an option in the data records by value and returns the mapped option
  //  * @param value - The value to find
  //  * @returns The options array if found, empty array otherwise
  //  */
  // const findOptions = useCallback(
  //   (
  //     value: (string | T) | (string | T)[] | undefined
  //   ): SelectItemObject<T, R>[] => {
  //     const res: SelectItemObject<T, R>[] = []
  //     if (value === undefined) {
  //       return res
  //     }

  //     if (!Array.isArray(value)) {
  //       value = [value]
  //     }

  //     for (const option of data.records) {
  //       const mappedOption = optionMapper(option)
  //       if (
  //         mappedOption.type !== "separator" &&
  //         value.includes(mappedOption.value)
  //       ) {
  //         res.push(mappedOption)
  //       }
  //     }
  //     return res
  //   },
  //   [data.records, optionMapper]
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

  const handleLocalValueChange = (changedValue: string | undefined) => {
    // Resets the search value when the option is selected
    setCurrentSearch(undefined)
    setLocalValue(changedValue as T)
    // const foundOptions = findOptions(changedValue)

    // if (!changedValue) {
    //   onChange?.(undefined, undefined, undefined)
    //   return
    // }

    // if (foundOptions) {
    //   onChange?.(foundOptions.value, foundOptions.item, foundOptions)
    // }
  }

  /**
   * Handles the change of the open state
   * @param open
   */
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

  const [primitiveValue, setPrimitiveValue] = useState<
    (typeof multiple extends true ? T[] : T) | undefined
  >(undefined)

  return (
    <>
      <SelectPrimitive
        onValueChange={handleLocalValueChange}
        value={primitiveValue}
        disabled={disabled}
        open={openLocal}
        multiple={multiple}
        onOpenChange={handleChangeOpenLocal}
        {...props}
        onItemCheckChange={handleSelectItemChange}
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
              value={localValue?.toString()}
              isEmpty={(value) =>
                (Array.isArray(value) && value.length === 0) || !value
              }
              onChange={(value) => handleLocalValueChange(value)}
              placeholder={placeholder || ""}
              disabled={disabled}
              clearable={clearable}
              size={size}
              loading={isInitialLoading || loading}
              name={name}
              onClickContent={() => {
                handleChangeOpenLocal(!openLocal)
              }}
              append={
                <div
                  className={cn(
                    "rounded-2xs bg-f1-background-secondary p-0.5",
                    "flex items-center justify-center",
                    !disabled && "cursor-pointer"
                  )}
                >
                  <div
                    className={cn(
                      "origin-center transition-transform duration-200",
                      "flex items-center justify-center",
                      openLocal && "rotate-180"
                    )}
                  >
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
                  </div>
                </div>
              }
            >
              <button
                className="flex w-full max-w-full items-center justify-between"
                aria-label={label || placeholder}
              >
                {selectedItems && <SelectValue selection={selectedItems} />}
              </button>
            </InputField>
          )}
        </SelectTrigger>
        {openLocal && (
          <SelectContent
            items={items}
            className={selectContentClassName}
            emptyMessage={searchEmptyMessage}
            bottom={
              <>
                <SelectBottomActions actions={actions} />
                {multiple && (
                  <div className="flex items-center justify-between">
                    <div className="text-f1-foreground-secondary">
                      {selectedItems?.length || 0} selected
                      <button
                        onClick={() => {
                          handleSelectAll(false)
                        }}
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => {
                          handleSelectAll(true)
                        }}
                      >
                        Select all
                      </button>
                    </div>
                  </div>
                )}
              </>
            }
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
