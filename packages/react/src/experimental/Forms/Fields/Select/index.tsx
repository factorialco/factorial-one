import { Icon } from "@/components/Utilities/Icon"
import { SelectItem } from "./components/SelectItem"
import { SelectValue } from "./components/SelectedValue"

import type { FiltersState } from "@/components/OneFilterPicker/types"
import {
  BaseFetchOptions,
  BaseResponse,
  FiltersDefinition,
  getDataSourcePaginationType,
  GroupingDefinition,
  OnSelectItemsCallbackStatus,
  PaginatedDataAdapter,
  PromiseOrObservable,
  RecordType,
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
    icon,
    labelIcon,
    clearable,
    loading,
    name,
    multiple,
    defaultItem,
    error,
    status,
    hint,
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const [localValue, setLocalValue] = useState<string[]>([])

  useEffect(() => {
    const defaultValues = multiple
      ? (defaultItem || []).map((item) => String(item.value))
      : defaultItem?.value
        ? [String(defaultItem.value)]
        : []

    if (Array.isArray(value)) {
      setLocalValue((value as unknown as T[]).map((v) => String(v)))
    } else if (value && !multiple) {
      setLocalValue([String(value as T)])
    } else {
      setLocalValue(defaultValues)
    }
  }, [defaultItem, value, multiple])

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

  const [primitiveValue, setPrimitiveValue] = useState<string | undefined>(
    undefined
  )

  const { handleSelectItemChange, handleSelectGroupChange, handleSelectAll } =
    useSelectable<
      R,
      FiltersDefinition,
      SortingsDefinition,
      GroupingDefinition<R>
    >(
      data,
      paginationInfo,
      localSource,
      (state) => {
        setLocalValue(
          Array.from(state.items.entries())
            .filter(([_, checked]) => checked)
            .map(([v]) => v) as T[]
        )
      },
      multiple,
      {
        all: false,
        items: new Map(localValue.map((v) => [v, true])),
        groups: new Map(),
      }
    )

  // Emit onChange when selection changes
  useEffect(() => {
    const paginationType = getDataSourcePaginationType(localSource.dataAdapter)
    const notPaginated = paginationType === "no-pagination"

    if (multiple) {
      if (notPaginated) {
        const items = (materializedSelectedItems || []).map((item) => ({
          value: item.value as T,
          item,
          option: optionMapper(item as R),
        }))
        const values = items.map((i) => i.value)
        onChange?.(
          values,
          items.map((i) => i.item as R),
          items.map((i) => i.option as SelectItemObject<T, R>)
        )
      } else {
        const itemsStatus = data.records
          .map((rec) => {
            const opt = optionMapper(rec as R)
            if (opt.type === "separator") return null
            const id = String(opt.value)
            const checked = selectedIdsForLoadedItems.has(id)
            return { item: rec as R, checked }
          })
          .filter(Boolean) as { item: R; checked: boolean }[]
        const groupsStatus = Object.fromEntries(
          Object.entries(groupAllSelectedStatus).map(([k, v]) => [
            k,
            !!v.checked,
          ])
        )
        const unselectedCount =
          data.records.length - selectedIdsForLoadedItems.size
        const allSelected =
          unselectedCount === 0
            ? !!selectedState.allSelected
            : selectedState.allSelected
              ? ("indeterminate" as const)
              : false
        const status: OnSelectItemsCallbackStatus<R, FiltersDefinition> = {
          allSelected,
          itemsStatus,
          groupsStatus,
          filters: (localSource.currentFilters ||
            {}) as FiltersState<FiltersDefinition>,
          selectedCount: selectedIdsForLoadedItems.size,
        }
        ;(
          onChange as unknown as (
            s: OnSelectItemsCallbackStatus<R, FiltersDefinition>
          ) => void
        )?.(status)
      }
    } else {
      // Single selection: emit primitive value and option
      if (
        !materializedSelectedItems ||
        materializedSelectedItems.length === 0
      ) {
        return
      }
      const item = materializedSelectedItems[0]
      const value = item?.value as T
      const option = optionMapper(item as R)
      setPrimitiveValue(String(value))
      onChange?.(value, item as R, option)
    }
  }, [
    multiple,
    data.records,
    groupAllSelectedStatus,
    localSource.currentFilters,
    materializedSelectedItems,
    onChange,
    optionMapper,
    selectedIdsForLoadedItems,
    selectedState.allSelected,
    localSource.dataAdapter,
  ])

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The options array if found, empty array otherwise
   */
  // Removed unused findOptions

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

  const handleLocalValueChange = (
    changedValue: string | string[] | undefined
  ) => {
    setCurrentSearch(undefined)
    if (Array.isArray(changedValue)) {
      setLocalValue(changedValue)
    } else if (changedValue) {
      setPrimitiveValue(changedValue)
      setLocalValue([changedValue])
    }
  }

  /**
   * When an option is checked or unchecked, we need to update the selected items status
   * @param value
   * @param checked
   */
  const handleItemCheckChange = (value: string, checked: boolean) => {
    handleSelectItemChange(value, checked)
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

  // primitiveValue is used only for single select UI control

  return (
    <>
      <SelectPrimitive
        onValueChange={handleLocalValueChange}
        value={multiple ? localValue : primitiveValue}
        disabled={disabled}
        open={openLocal}
        multiple={multiple}
        onOpenChange={handleChangeOpenLocal}
        {...props}
        onItemCheckChange={handleItemCheckChange}
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
              status={status}
              hint={hint}
              icon={icon}
              labelIcon={labelIcon}
              hideLabel={hideLabel}
              value={""}
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
                {multiple
                  ? (() => {
                      const selected = data.records
                        .map((r) => optionMapper(r))
                        .filter(
                          (o) =>
                            o.type !== "separator" &&
                            selectedIdsForLoadedItems.has(String(o.value))
                        ) as SelectItemObject<T, R>[]
                      return selected.length > 0 ? (
                        <SelectValue selection={selected} />
                      ) : undefined
                    })()
                  : (() => {
                      const first = materializedSelectedItems?.[0]
                      return first ? (
                        <SelectValue
                          selection={
                            optionMapper(first as R) as SelectItemObject<T, R>
                          }
                        />
                      ) : undefined
                    })()}
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
                      {selectedIdsForLoadedItems.size || 0} selected
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
                onGroupingChange={(value) => {
                  localSource.setCurrentGrouping(value)
                }}
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
