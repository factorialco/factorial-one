import { forwardRef } from "react"

interface TwoColumnsItemType {
  title: string
  info: string
}

interface TwoColumnsListType {
  list: TwoColumnsItemType[]
}

const TwoColumnsItem = forwardRef<HTMLDivElement, TwoColumnsItemType>(
  ({ title, info }, ref) => {
    return (
      <div ref={ref} className="flex flex-row justify-between">
        <div className="text-f1-foreground-secondary">{title}</div>
        <div className="font-semibold">{info}</div>
      </div>
    )
  }
)

export const TwoColumnsList = forwardRef<HTMLDivElement, TwoColumnsListType>(
  ({ list }, ref) => {
    return (
      <div ref={ref} className="flex flex-col gap-3">
        {list.map((item) => (
          <TwoColumnsItem
            key={item.title}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    )
  }
)
