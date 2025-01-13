import { Icon, IconType } from "@/components/Utilities/Icon"
import {
  AvatarVariant,
  renderAvatar,
} from "@/experimental/Information/Avatars/utils"
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
import { forwardRef } from "react"

type SelectItemObject<T> = {
  value: T
  label: string
  icon?: IconType
  description?: string
  avatar?: AvatarVariant
}

type SelectItemProps<T> = SelectItemObject<T> | "separator"

type SelectProps<T> = {
  placeholder?: string
  onChange: (value: T) => void
  value?: T
  options: SelectItemProps<T>[]
  children?: React.ReactNode
  disabled?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SelectItem = ({ item }: { item: SelectItemObject<string> }) => {
  return (
    <SelectItemPrimitive value={item.value}>
      <div className="flex items-start gap-1.5">
        {item.avatar && renderAvatar(item.avatar, "xsmall")}
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

const defaultTrigger =
  "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1"

export const Select = forwardRef<HTMLButtonElement, SelectProps<string>>(
  function Select(
    {
      placeholder,
      options,
      onChange,
      value,
      children,
      disabled,
      open,
      onOpenChange,
      ...props
    },
    ref
  ) {
    const selectedOption = options.find(
      (option): option is Exclude<typeof option, "separator"> =>
        option !== "separator" && option.value === value
    )

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
          {options.map((option, index) =>
            option === "separator" ? (
              <SelectSeparator key={`separator-${index}`} />
            ) : (
              <SelectItem key={option.value} item={option} />
            )
          )}
        </SelectContent>
      </SelectPrimitive>
    )
  }
)
