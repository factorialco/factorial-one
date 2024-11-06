import {
  AvatarVariant,
  renderAvatar,
} from "@/experimental/Information/Avatars/exports"
import * as Icons from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import {
  SelectContent,
  SelectItem as SelectItemPrimitive,
  Select as SelectPrimitive,
  SelectTrigger,
  SelectValue as SelectValuePrimitive,
} from "@/ui/select"
import { forwardRef } from "react"

type IconName = keyof typeof Icons

type SelectItemProps<T> = {
  value: T
  label: string
  icon?: IconName
  description?: string
  avatar?: AvatarVariant
}

type SelectProps<T> = {
  placeholder: string
  onChange: (value: T) => void
  value?: T
  options: SelectItemProps<T>[]
  children?: React.ReactNode
  disabled?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const SelectItem = ({ item }: { item: SelectItemProps<string> }) => {
  const Icon = item.icon && Icons[item.icon]
  return (
    <SelectItemPrimitive value={item.value}>
      <div className="flex items-start gap-1.5">
        {item.avatar && renderAvatar(item.avatar, "xsmall")}
        {Icon && <Icon className="h-5 w-5 shrink-0 text-f1-icon" />}
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

const SelectValue = ({ item }: { item: SelectItemProps<string> }) => {
  const Icon = item.icon && Icons[item.icon]
  return (
    <div className="flex items-center gap-1.5">
      {Icon && <Icon className="h-5 w-5 shrink-0 text-f1-icon" />}
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
    const selectedOption = options.find((option) => option.value === value)

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
                  <Icons.ChevronDown className="h-3 w-3" />
                </div>
              </div>
            </button>
          )}
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} item={option} />
          ))}
        </SelectContent>
      </SelectPrimitive>
    )
  }
)
