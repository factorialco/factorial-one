import { Icon } from "@/components/Utilities/Icon"
import { SelectItem } from "./components/SelectItem"
import { SelectValue } from "./components/SelectedValue"

const emptyState = () => ({
  all: false,
  items: new Map<string, boolean>(),
  groups: new Map<string, boolean>(),
})

type SelectionState = ReturnType<typeof emptyState>

import {
  BaseFetchOptions,
  BaseResponse,
  FiltersDefinition,
  getDataSourcePaginationType,
  OnSelectItemsCallbackStatus,
  PaginatedDataAdapter,
  PromiseOrObservable,
  RecordType,
  useData,
  useDataSource,
  useGroups,
  useSelectable,
  WithGroupId,
} from "@/hooks/datasource"
import { ChevronDown } from "@/icons/app"
import { toArray } from "@/lib/toArray"
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
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const [localValue, setLocalValue] = useState<T[] | undefined>(undefined)

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

  /**
   * Handles the selection of items and groups
   * We use the more complex case (chunked data) internally, but for the single selection we will return just the selected item outside the component
   */

  const handleSelectionStatusChange = useCallback(
    (state: OnSelectItemsCallbackStatus<R, FiltersDefinition> | undefined) => {
      if (!state) {
        return
      }

      const notPaginated =
        getDataSourcePaginationType(localSource.dataAdapter) === "no-pagination"

      console.log("handleSelectionStatusChange", state)
      if (notPaginated) {
        const selectedItemsIds = state.itemsStatus
          .filter((item) => item.checked)
          .map((item) => localSource.selectable?.(item.item) as T)

        if (!multiple) {
          onChange?.(selectedItemsIds[0], undefined, undefined)
        } else {
          onChange?.(selectedItemsIds, undefined, undefined)
        }
      } else {
        onChange?.(state)
      }

      return
    },
    [
      multiple,
      onChange,
      localSource.dataAdapter,
      localValue,
      JSON.stringify(data.records),
    ]
  )

  const {
    handleSelectItemChange,
    handleSelectAll,
    selectedItems: selectedItems,
  } = useSelectable(
    data,
    paginationInfo,
    localSource,
    multiple ?? false,
    handleSelectionStatusChange,
    undefined
  )

  useEffect(() => {
    if (JSON.stringify(localValue) === JSON.stringify(value)) {
      return
    }

    const valueArray = toArray(value)

    const newValue = valueArray.length > 0 ? valueArray : []

    // If the value status describes a selection state, we dont need to transform it
    if (typeof value === "object" && "all" in value) {
      // setSelectionState(value)
      return
    }

    // setSelectionState({
    //   ...emptyState(),
    //   items: new Map(
    //     newValue.map((itemId) => [itemId, true] as [ItemId, boolean])
    //   ),
    // })
  }, [JSON.stringify(value), multiple])

  /**
   * Finds options in the data records by value and returns the mapped option(s).
   * @param value - The value or array of values to find
   * @returns The mapped option(s) if found, otherwise undefined
   */
  type FindOptionsFn = {
    (value: T[]): SelectItemObject<T, R>[]
    (value: T): SelectItemObject<T, R> | undefined
    (value: T[] | undefined): SelectItemObject<T, R>[] | undefined
    (value: T | undefined): SelectItemObject<T, R> | undefined
  }

  const findMappedOptions = useCallback(
    ((value: T | T[] | undefined) => {
      if (value === undefined) {
        return undefined
      }

      const valueArray = Array.isArray(value) ? value : [value]
      const res: SelectItemObject<T, R>[] = []

      for (const option of data.records) {
        const mappedOption = optionMapper(option)
        if (
          mappedOption.type !== "separator" &&
          valueArray.includes(mappedOption.value)
        ) {
          res.push(mappedOption)
        }
      }

      return Array.isArray(value) ? res : res[0]
    }) as FindOptionsFn,
    [data.records, optionMapper]
  )

  const findOptions = useCallback(
    (value: T | T[] | undefined): R[] => {
      const valueArray = toArray(value)
      return data.records.filter((record) =>
        valueArray.includes(localSource.selectable?.(record) as T)
      )
    },
    [data.records, localSource]
  )

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
    const changedOption = findMappedOptions(changedValue as T | undefined)

    // Resets the search value when the option is selected
    setCurrentSearch(undefined)

    onChangeSelectedOption?.(changedOption ?? undefined)
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

  const primitiveValue = useMemo(() => {
    return selectedItems.keys()
    // const items = (data.records || []).filter((record) => {
    //   return selectedItemsState?.some((item) => item.value === record.id)
    // })
    // return items.map((item) => item.id)
  }, [selectedItems])

  const selectedOptions = useMemo(() => {
    return Array.from(selectedItems.values()).map((item) => optionMapper(item))
  }, [selectedItems])

  return (
    <>
      *** {JSON.stringify(primitiveValue)}
      <SelectPrimitive
        value={primitiveValue}
        disabled={disabled}
        open={openLocal}
        multiple={multiple}
        onOpenChange={handleChangeOpenLocal}
        {...props}
        onItemCheckChange={(value, checked) => {
          const option = findOptions(value as T)
          console.log("onItemCheckChange", value, checked, option)
          if (option) {
            handleSelectItemChange(option, checked)
          }
        }}
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
              value={selectedItems.size ? "content" : undefined}
              isEmpty={(value) =>
                (Array.isArray(value) && value.length === 0) || !value
              }
              onChange={(value) => handleLocalValueChange(value)}
              placeholder={placeholder || ""}
              disabled={disabled}
              clearable={clearable}
              onClear={() => {
                //setSelectionState(emptyState())
              }}
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
                {selectedItems && (
                  <SelectValue
                    multiple={multiple}
                    selection={selectedOptions}
                  />
                )}
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
