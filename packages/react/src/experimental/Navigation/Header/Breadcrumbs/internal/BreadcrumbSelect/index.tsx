import { motion } from "motion/react"
import { useState } from "react"
import { Icon } from "../../../../../../components/Utilities/Icon"
import { ChevronDown } from "../../../../../../icons/app"
import { Select, SelectProps } from "../../../../../Forms/Fields/Select"

export type BreadcrumbSelectProps = SelectProps<string>

export function BreadcrumbSelect({ ...props }: BreadcrumbSelectProps) {
  const [localOpen, setLocalOpen] = useState(props.open)

  const onOpenChangeLocal = (open: boolean) => {
    setLocalOpen(open)
    props.onOpenChange?.(open)
  }

  const selectedLabel = "TODO"

  return (
    <Select {...props} onOpenChange={onOpenChangeLocal}>
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
