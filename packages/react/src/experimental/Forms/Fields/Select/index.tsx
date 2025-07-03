import { Icon } from "@/components/Utilities/Icon"
import {
  DataSource,
  FiltersDefinition,
  GroupingDefinition,
  ItemActionsDefinition,
  NavigationFiltersDefinition,
  RecordType,
  SortingsDefinition,
  SummariesDefinition,
  useDataSource,
} from "@/experimental/exports"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
import { useData } from "@/experimental/OneDataCollection/useData"
import { ChevronDown } from "@/icons/app"
import {
  SelectContent,
  SelectItem as SelectItemPrimitive,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  SelectValue as SelectValuePrimitive,
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
import { cn, focusRing } from "../../../../lib/utils"
import { Avatar } from "../../../Information/Avatars/Avatar"
import { Action, SelectBottomActions } from "./SelectBottomActions"
import { SelectTopActions } from "./SelectTopActions"
import type { SelectItemObject, SelectItemProps } from "./types"

export * from "./types"

/* eslint-disable-next-line @typescript-eslint/no-explicit-any -- Allow to pass anything as item */
export type SelectProps<T, R = any> = {
  placeholder?: string
  onChange: (value: T, item?: R) => void
  value?: T
  defaultItem?: SelectItemObject<T, R>
  children?: React.ReactNode
  disabled?: boolean
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
      source: DataSource<
        RecordType,
        FiltersDefinition,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<RecordType>,
        NavigationFiltersDefinition,
        GroupingDefinition<RecordType>
      >
      options: (item: R) => SelectItemProps<T, R>
    }
  | {
      source?: never
      options: SelectItemProps<T, R>[]
    }
)

const SelectItem = <T,>({ item }: { item: SelectItemObject<T> }) => {
  return (
    <SelectItemPrimitive value={String(item.value)}>
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
  { item: SelectItemObject<unknown> }
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

const defaultTrigger =
  "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1"

const SelectComponent = forwardRef(function Select<T, R>(
  {
    placeholder,
    options = [],
    onChange,
    value,
    children,
    disabled,
    open,
    onOpenChange,
    showSearchBox,
    onSearchChange,
    searchBoxPlaceholder,
    searchEmptyMessage,
    className,
    selectContentClassName,
    actions,
    source,
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const isLocalSourceOptions = (
    options: SelectItemProps<T, R>[] | ((item: R) => SelectItemProps<T, R>)
  ): options is SelectItemProps<T, R>[] => {
    return Array.isArray(options)
  }

  const localSource = useDataSource({
    ...source,
    currentSearch: props.searchValue,
    dataAdapter:
      isLocalSourceOptions(options) || !source
        ? {
            fetchData: ({ search }: { search?: string }) => {
              return Promise.resolve({
                records: options.filter(
                  (option) =>
                    option.type === "separator" ||
                    !search ||
                    option.label.toLowerCase().includes(search.toLowerCase())
                ),
              })
            },
          }
        : {
            ...source.dataAdapter,
            // Forces the infinite-scroll pagination type
            paginationType: "infinite-scroll",
            perPage: 10,
          },
    search: showSearchBox
      ? {
          enabled: showSearchBox,
          sync: false,
        }
      : undefined,
  })

  const optionMapper = useCallback(
    (item: R) => {
      if (typeof options === "function") {
        return options(item)
      }
      return item
    },
    [options]
  )

  const { data, isInitialLoading, loadMore, isLoadingMore } =
    useData(localSource)

  const { currentSearch, setCurrentSearch } = localSource

  const [selectedOption, setSelectedOption] = useState<
    SelectItemObject<T, R> | undefined
  >(undefined)

  useEffect(() => {
    const foundOption = data.records.find(
      (option): option is Exclude<typeof option, { type: "separator" }> => {
        const mappedOption = optionMapper(option as R)
        return mappedOption.type !== "separator" && mappedOption.value === value
      }
    )
    if (foundOption) {
      setSelectedOption(foundOption)
    }
  }, [data.records, value, optionMapper])

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

  const onValueChange = (changedValue: string) => {
    // Resets the search value when the option is selected
    setCurrentSearch(undefined)
    const foundOption = data.records.find(
      (option): option is SelectItemObject<T, R> => {
        const mappedOption = optionMapper(option as R)
        return (
          mappedOption.type !== "separator" &&
          String(mappedOption.value) === changedValue
        )
      }
    )
    if (foundOption) {
      onChange?.(foundOption.value, foundOption.item)
    }
  }

  const onOpenChangeLocal = (open: boolean) => {
    onOpenChange?.(open)
    setOpenLocal(open)
    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)
  }

  const items: VirtualItem[] = useMemo(() => {
    return data.records.map((option, index) => {
      const mappedOption = optionMapper(option as R)
      return mappedOption.type === "separator"
        ? {
            height: 1,
            item: <SelectSeparator key={`separator-${index}`} />,
          }
        : {
            height: option.description ? 64 : 32,
            item: (
              <SelectItem
                key={String(mappedOption.value)}
                item={mappedOption}
              />
            ),
            value: String(mappedOption.value),
          }
    })
  }, [data.records, optionMapper])

  const handleScrollBottom = () => {
    loadMore()
  }

  return (
    <>
      <SelectPrimitive
        onValueChange={onValueChange}
        value={
          value !== undefined && value !== null ? String(value) : undefined
        }
        disabled={disabled}
        open={open}
        onOpenChange={onOpenChangeLocal}
        {...props}
      >
        <SelectTrigger ref={ref} asChild>
          {children || (
            <button
              aria-label="Select unfoldable"
              className={cn(
                defaultTrigger,
                className,
                focusRing("focus-visible:border-f1-border-hover")
              )}
            >
              <SelectValuePrimitive placeholder={placeholder} asChild>
                {isInitialLoading
                  ? "[TODO] Loading...."
                  : selectedOption && <SelectValue item={selectedOption} />}
              </SelectValuePrimitive>
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="h-4 w-4 rounded-2xs bg-f1-background-secondary">
                  <Icon
                    icon={ChevronDown}
                    size="sm"
                    className="rounded-2xs bg-f1-background-secondary p-0.5"
                  />
                </div>
              </div>
            </button>
          )}
        </SelectTrigger>
        currentSearch: {currentSearch}
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

export const Select = SelectComponent as <T = string, R = unknown>(
  props: SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
