import { OneEllipsis } from "@/components/OneEllipsis"
import { Icon } from "@/components/Utilities/Icon"

import { TagList } from "@/experimental"
import { forwardRef } from "react"
import type { SelectItemObject } from "../types"

/**
 * Component for displaying the selected value or values in the ibputField
 */
export const SelectValue = forwardRef<
  HTMLDivElement,
  {
    selection: SelectItemObject<string> | SelectItemObject<string>[]
  }
>(function SelectValue({ selection }, ref) {
  if (Array.isArray(selection)) {
    return (
      <div className="h-full w-full">
        <TagList
          layout="fill"
          type="raw"
          tags={selection.map((i) => ({
            text: i.label,
            type: "raw",
            icon: i.icon,
          }))}
        />
      </div>
    )
  }

  return (
    <div className="flex min-w-[20px] shrink items-center gap-1.5" ref={ref}>
      {selection.icon && (
        <div className="h-5 shrink-0 text-f1-icon">
          <Icon icon={selection.icon} />
        </div>
      )}
      <OneEllipsis className="min-w-0 shrink">{selection.label}</OneEllipsis>
    </div>
  )
})
