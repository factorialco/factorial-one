import {
  Select,
  SelectItemObject,
  SelectProps,
} from "@/core/components/experimental/Forms/Fields/Select"
import { Icon } from "@/core/components/utility/Icon"
import { Skeleton } from "@/core/internal/skeleton.tsx"
import { ChevronDown } from "@/icons/app"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

type Items = SelectItemObject<string>[]
type Options = Items | ((search?: string) => Promise<Items> | Items)

export type BreadcrumbSelectProps = Omit<
  SelectProps<string>,
  "options" | "value"
> & {
  options: Options
  value?: string
  defaultItem?: SelectItemObject<string>
}

export function BreadcrumbSelect({
  options,
  defaultItem,
  ...props
}: BreadcrumbSelectProps) {
  const [loading, setLoading] = useState(false)
  const [localOptions, setOptions] = useState<SelectItemObject<string>[]>([])
  const [localValue, setLocalValue] = useState(
    props.value || defaultItem?.value
  )
  const [firstRender, setFirstRender] = useState(true)

  const [localOpen, setLocalOpen] = useState(props.open)

  const selectedItem = useMemo(() => {
    return localOptions.find((item) => item.value === localValue)
  }, [localOptions, localValue])

  const onChangeLocal = (value: string) => {
    setLocalValue(value)
    props.onChange?.(value)
  }

  const [localSearch, setLocalSearch] = useState(props.searchValue)

  const onSearchChange = async (search: string) => {
    setLocalSearch(search)
    props.onSearchChange?.(search)
  }

  useEffect(() => {
    const fetchOptions = async (search?: string) => {
      if (typeof options === "function") {
        setLoading(true)
        setOptions(await options(search))
        setLoading(false)
      } else {
        setOptions(options)
      }
      setFirstRender(false)
    }

    fetchOptions(localSearch)
  }, [options, localSearch])

  const onOpenChangeLocal = (open: boolean) => {
    setLocalOpen(open)
    props.onOpenChange?.(open)
  }

  const selectedLabel = useMemo(() => {
    return (
      selectedItem?.label || defaultItem?.label || props.placeholder || "Select"
    )
  }, [selectedItem, defaultItem, props.placeholder])

  return loading && firstRender ? (
    <Skeleton className="h-5 w-full" data-testid="skeleton" />
  ) : (
    <Select
      {...props}
      options={localOptions}
      onChange={onChangeLocal}
      onSearchChange={onSearchChange}
      value={localValue}
      searchValue={localSearch}
      onOpenChange={onOpenChangeLocal}
    >
      <button
        className="flex h-6 items-center justify-between rounded-sm border px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary"
        role="combobox"
        aria-label={selectedLabel}
      >
        <span className="block grow text-f1-foreground">{selectedLabel}</span>
        <div className="ml-2">
          <motion.div
            animate={{ rotate: localOpen ? 180 : 0 }}
            className="h-[16px] w-[16px]"
          >
            <Icon
              icon={ChevronDown}
              size="sm"
              className="rounded-2xs bg-f1-background-secondary p-0.5"
            />
          </motion.div>
        </div>
      </button>
    </Select>
  )
}
