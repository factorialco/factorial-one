import { Icon } from "@/components/Utilities/Icon"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader"
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
  SortingsDefinition,
  useData,
  useDataSource,
  useGroups,
  WithGroupId,
} from "@/hooks/datasource"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"
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
export type SelectProps<T extends string, R = unknown> = {
  onChange: (
    value: T,
    originalItem?: R,
    option?: SelectItemObject<T, R>
  ) => void
  onChangeSelectedOption?: (option: SelectItemObject<T, R>) => void
  value?: T
  defaultItem?: SelectItemObject<T, R>
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
        R extends RecordType ? R : RecordType,
        FiltersDefinition,
        SortingsDefinition,
        GroupingDefinition<R extends RecordType ? R : RecordType>
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
  { item: SelectItemObject<string> }
>(function SelectValue({ item }, ref) {
  return (
    <div className="flex items-center gap-1.5" ref={ref}>
      {item.icon && (
        <div className="h-5 shrink-0 text-f1-icon">
          <Icon icon={item.icon} />
        </div>
      )}
      {item.label}
    </div>
  )
})

const SelectComponent = forwardRef(function Select<
  T extends string,
  R = unknown,
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
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const [localValue, setLocalValue] = useState(
    value || props.defaultItem?.value
  )

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
        ? (source.dataAdapter as PaginatedDataAdapter<
            R extends RecordType ? R : RecordType,
            FiltersDefinition
          >)
        : {
            fetchData: ({
              search,
            }: BaseFetchOptions<FiltersDefinition>): PromiseOrObservable<
              BaseResponse<R extends RecordType ? R : RecordType>
            > => {
              return {
                records: options.filter(
                  (option) =>
                    option.type === "separator" ||
                    !search ||
                    option.label.toLowerCase().includes(search.toLowerCase())
                ) as unknown as (R extends RecordType ? R : RecordType)[],
              }
            },
          },
    }
  }, [options, source])

  const localSource = useDataSource(
    {
      ...dataSource,
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
    <R extends RecordType>(item: R): SelectItemProps<T, R> => {
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

  const { data, isInitialLoading, loadMore, isLoadingMore } =
    useData<R>(localSource)

  const { currentSearch, setCurrentSearch } = localSource

  const [selectedOption, setSelectedOption] = useState<
    SelectItemObject<T, R> | undefined
  >(undefined)

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The option if found, undefined otherwise
   */
  const findOption = useCallback(
    (value: string | T | undefined): SelectItemObject<T, R> | undefined => {
      if (value === undefined) {
        return undefined
      }
      for (const option of data.records) {
        const mappedOption = optionMapper(option)
        if (
          mappedOption.type !== "separator" &&
          String(mappedOption.value) === value
        ) {
          return mappedOption
        }
      }
      return undefined
    },
    [data.records, optionMapper]
  )

  useEffect(() => {
    const foundOption = findOption(localValue)
    if (foundOption) {
      onChangeSelectedOption?.(foundOption)
      setSelectedOption(foundOption)
    }
  }, [
    data.records,
    localValue,
    optionMapper,
    findOption,
    onChangeSelectedOption,
  ])

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
    const foundOption = findOption(changedValue)

    if (foundOption) {
      onChange?.(foundOption.value, foundOption.item, foundOption)
    }
  }

  const handleChangeOpenLocal = (open: boolean) => {
    onOpenChange?.(open)
    setOpenLocal(open)
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }

  // const collapsible = localSource.grouping?.collapsible
  const defaultOpenGroups = localSource.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  const getItems = useCallback(
    (records: WithGroupId<R>[]): VirtualItem[] => {
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

  return (
    <>
      <SelectPrimitive
        onValueChange={handleLocalValueChange}
        value={
          localValue !== undefined && localValue !== null
            ? String(localValue)
            : undefined
        }
        disabled={disabled}
        open={openLocal}
        onOpenChange={handleChangeOpenLocal}
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
              value={localValue as string}
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
                className="flex w-full items-center justify-between"
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
  R = unknown,
>(
  props: SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
