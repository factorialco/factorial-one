import { Icon } from "@/components/Utilities/Icon"
import { F1SearchBox } from "@/experimental/Forms/Fields/F1SearchBox"
import { Avatar } from "@/experimental/Information/Avatars/Avatar"
import { ChevronDown } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import {
  SelectContent,
  SelectItem as SelectItemPrimitive,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  SelectValue as SelectValuePrimitive,
} from "@/ui/select"
import { forwardRef, useMemo, useState } from "react"
import type { SelectItemObject, SelectItemProps } from "./internal-types"

type SelectProps<T> = {
  placeholder?: string
  onChange: (value: T) => void
  value?: T
  options: SelectItemProps<T>[]
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
}

const SelectItem = ({ item }: { item: SelectItemObject<string> }) => {
  return (
    <SelectItemPrimitive value={item.value}>
      <div className="flex items-start gap-1.5">
        {item.avatar && <Avatar avatar={item.avatar} size="xsmall" />}
        {item.icon && (
          <div className="text-f1-icon">
            <Icon icon={item.icon} />
          </div>
        )}
        <div className="flex flex-col">
          <span className="font-medium">{item.label}</span>
          {item.description && (
            <div className="text-f1-foreground-secondary">
              {item.description}
            </div>
          )}
        </div>
      </div>
    </SelectItemPrimitive>
  )
}

const SelectValue = ({ item }: { item: SelectItemObject<string> }) => {
  return (
    <div className="flex items-center gap-1.5">
      {item.icon && (
        <div className="h-5 shrink-0 text-f1-icon">
          <Icon icon={item.icon} />
        </div>
      )}
      {item.label}
    </div>
  )
}

const SelectOptions = ({
  options,
  emptyMessage,
}: {
  options: SelectProps<string>["options"]
  emptyMessage?: string
}) => {
  return (
    <>
      {options.filter((option) => option !== "separator").length ? (
        options.map((option, index) =>
          option === "separator" ? (
            <SelectSeparator key={`separator-${index}`} />
          ) : (
            <SelectItem key={option.value} item={option} />
          )
        )
      ) : (
        <p className="p-2 text-center">{emptyMessage}</p>
      )}
    </>
  )
}

const defaultTrigger =
  "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1"

export const Select = forwardRef<HTMLButtonElement, SelectProps<string>>(
  function Select(
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
      ...props
    },
    ref
  ) {
    const selectedOption = options.find(
      (option): option is Exclude<typeof option, "separator"> =>
        option !== "separator" && option.value === value
    )

    const [searchValue, setSearchValue] = useState(props.searchValue)

    const filteredOptions = useMemo(() => {
      if (externalSearch) {
        return options
      }

      const res = options.filter(
        (option) =>
          option == "separator" ||
          !searchValue ||
          option.label.toLowerCase().includes(searchValue.toLowerCase())
      )

      return res
    }, [options, externalSearch, searchValue])

    const onSearchChangeLocal = (value: string) => {
      setSearchValue(value)
      onSearchChange?.(value)
    }

    return (
      <SelectPrimitive
        onValueChange={onChange}
        value={value}
        disabled={disabled}
        open={open}
        onOpenChange={onOpenChange}
        {...props}
      >
        <SelectTrigger ref={ref} asChild>
          {children || (
            <button
              className={cn(
                defaultTrigger,
                focusRing("focus-visible:border-f1-border-hover")
              )}
            >
              <SelectValuePrimitive placeholder={placeholder} asChild>
                {selectedOption && <SelectValue item={selectedOption} />}
              </SelectValuePrimitive>
              <div className="flex h-6 w-6 items-center justify-center">
                <div className="h-4 w-4 rounded-2xs bg-f1-background-secondary">
                  <Icon icon={ChevronDown} size="xs" />
                </div>
              </div>
            </button>
          )}
        </SelectTrigger>
        <SelectContent>
          {showSearchBox && (
            <div className="p-3">
              <F1SearchBox
                placeholder={searchBoxPlaceholder}
                onChange={onSearchChangeLocal}
                clearable
                value={props.searchValue}
                key="search-input"
              />
            </div>
          )}
          <SelectOptions
            options={filteredOptions}
            emptyMessage={searchEmptyMessage}
          />
        </SelectContent>
      </SelectPrimitive>
    )
  }
)
