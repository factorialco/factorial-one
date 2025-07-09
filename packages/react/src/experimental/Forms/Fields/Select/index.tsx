import { Icon, IconType } from "@/components/Utilities/Icon"
import { RawTag } from "@/experimental/Information/Tags/RawTag"
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
  size?: InputFieldProps<T>["size"]
  onOpenChange?: (open: boolean) => void
  searchEmptyMessage?: string
  className?: string
  selectContentClassName?: string
  actions?: Action[]
  label: string
  error?: string
  icon?: IconType
  labelIcon?: IconType
  clearable?: boolean
}

const SelectItem = ({ item }: { item: SelectItemObject<string> }) => {
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

const SelectComponent = forwardRef(function Select<T extends string, R>(
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
    size,
    selectContentClassName,
    actions,
    label,
    error,
    icon,
    labelIcon,
    clearable,
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const selectedOption = options.find(
    (option): option is Exclude<typeof option, { type: "separator" }> =>
      option.type !== "separator" && option.value === value
  )

  const searchInputRef = useRef<HTMLInputElement>(null)

  const [searchValue, setSearchValue] = useState(props.searchValue || "")
  const [openLocal, setOpenLocal] = useState(open)
  const [localValue, setLocalValue] = useState(value)

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

  const handleLocalValueChange = (value: T) => {
    setLocalValue(value)
    // Resets the search value when the option is selected
    setSearchValue("")
    onChange?.(
      value,
      options.find(
        (option): option is SelectItemObject<T, R> =>
          typeof option === "object" &&
          option.type !== "separator" &&
          option.value === value
      )?.item
    )
  }

  const handleChangeOpenLocal = (open: boolean) => {
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
              item: <SelectItem key={option.value} item={option} />,
              value: option.value,
            }
      ),
    [filteredOptions]
  )

  return (
    <SelectPrimitive
      onValueChange={handleLocalValueChange}
      value={localValue}
      disabled={disabled}
      open={openLocal}
      onOpenChange={handleChangeOpenLocal}
      {...props}
    >
      {children ? (
        <SelectTrigger ref={ref} asChild>
          <div className="flex w-full items-center justify-between">
            {children}
          </div>
        </SelectTrigger>
      ) : (
        <SelectTrigger ref={ref} asChild>
          <InputField
            label={label}
            error={error}
            icon={icon}
            labelIcon={labelIcon}
            value={localValue}
            onChange={(value) => handleLocalValueChange(value as T)}
            placeholder={placeholder}
            disabled={disabled}
            clearable={clearable}
            size={size}
            onClickContent={() => {
              handleChangeOpenLocal(!openLocal)
            }}
            append={
              <Icon
                onClick={() => {
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
            <div className="flex w-full items-center justify-between">
              {selectedOption && <SelectValue item={selectedOption} />}
            </div>
          </InputField>
        </SelectTrigger>
      )}

      {openLocal && (
        <SelectContent
          items={items}
          className={cn(selectContentClassName)}
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

export const Select = SelectComponent as <
  T extends string = string,
  R = unknown,
>(
  props: SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
