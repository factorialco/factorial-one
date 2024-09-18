import { forwardRef } from "react"

interface SheetItemType {
  title: string
  info: string
}

interface SheetListType {
  list: SheetItemType[]
}

const SheetItem = forwardRef<HTMLDivElement, SheetItemType>(
  ({ title, info }, ref) => {
    return (
      <div ref={ref} className="flex flex-row justify-between">
        <div className="text-f1-foreground-secondary">{title}</div>
        <div className="font-semibold">{info}</div>
      </div>
    )
  }
)

export const SheetList = forwardRef<HTMLDivElement, SheetListType>(
  ({ list }, ref) => {
    return (
      <div ref={ref} className="flex flex-col gap-3">
        {list.map((item) => (
          <SheetItem key={item.title} title={item.title} info={item.info} />
        ))}
      </div>
    )
  }
)
