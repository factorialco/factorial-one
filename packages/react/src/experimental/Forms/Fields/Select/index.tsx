import { Icon } from "@/components/Utilities/Icon"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
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
  options: SelectItemProps<T, R>[]
  children?: React.ReactNode
  disabled?: boolean
  open?: boolean
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange?: (value: string) => void
  externalSearch?: boolean
  searchValue?: string
  onOpenChange?: (open: boolean) => void
  searchEmptyMessage?: string
  className?: string
  selectContentClassName?: string
  actions?: Action[]
}

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
    externalSearch,
    searchEmptyMessage,
    className,
    selectContentClassName,
    actions,
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const selectedOption = options.find(
    (option): option is Exclude<typeof option, { type: "separator" }> =>
      option.type !== "separator" && option.value === value
  )

  const searchInputRef = useRef<HTMLInputElement>(null)

  const [searchValue, setSearchValue] = useState(
    (props as { searchValue?: string }).searchValue || ""
  )
  const [openLocal, setOpenLocal] = useState(open)

  const filteredOptions = useMemo(() => {
    if (externalSearch) {
      return options
    }

    const res = options.filter(
      (option) =>
        option.type === "separator" ||
        !searchValue ||
        option.label.toLowerCase().includes(searchValue.toLowerCase())
    )

    setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)

    return res
  }, [options, externalSearch, searchValue])

  useEffect(() => {
    if (open) {
      searchInputRef.current?.focus()
    }
  }, [open])

  const onSearchChangeLocal = useCallback(
    (value: string) => {
      setSearchValue(value)
      onSearchChange?.(value)
    },
    [setSearchValue, onSearchChange]
  )

  const onValueChange = (changedValue: string) => {
    // Resets the search value when the option is selected
    setSearchValue("")
    const foundOption = options.find(
      (option): option is SelectItemObject<T, R> =>
        option.type !== "separator" && String(option.value) === changedValue
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

  const items: VirtualItem[] = useMemo(
    () =>
      filteredOptions.map((option, index) =>
        option.type === "separator"
          ? {
              height: 1,
              item: <SelectSeparator key={`separator-${index}`} />,
            }
          : {
              height: option.description ? 64 : 32,
              item: <SelectItem key={String(option.value)} item={option} />,
              value: String(option.value),
            }
      ),
    [filteredOptions]
  )

  return (
    <SelectPrimitive
      onValueChange={onValueChange}
      value={value !== undefined && value !== null ? String(value) : undefined}
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
              {selectedOption && <SelectValue item={selectedOption} />}
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
      {openLocal && (
        <SelectContent
          items={items}
          className={selectContentClassName}
          emptyMessage={searchEmptyMessage}
          bottom={<SelectBottomActions actions={actions} />}
          top={
            <SelectTopActions
              searchInputRef={searchInputRef}
              searchValue={searchValue}
              onSearchChange={onSearchChangeLocal}
              searchBoxPlaceholder={searchBoxPlaceholder}
              showSearchBox={showSearchBox}
            />
          }
        ></SelectContent>
      )}
    </SelectPrimitive>
  )
})

export const Select = SelectComponent as <T = string, R = unknown>(
  props: SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
