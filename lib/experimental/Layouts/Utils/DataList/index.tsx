import { ComponentProps, forwardRef } from "react"
import { DataItem } from "../DataItem"

interface DataListProps {
  items: ComponentProps<typeof DataItem>[]
}

export const DataList = forwardRef<HTMLDivElement, DataListProps>(
  ({ items }, ref) => {
    return (
      <div ref={ref} className="flex flex-col gap-0.5">
        {items.map(({ ...props }, i) => (
          <DataItem key={i} {...props} />
        ))}
      </div>
    )
  }
)

DataList.displayName = "DataList"
