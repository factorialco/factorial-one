import { forwardRef } from "react"

interface TwoColumnsItemType {
  title: string
  info: string
}

interface TwoColumnsListType {
  list: TwoColumnsItemType[]
}

const Item = ({ title, info }: TwoColumnsItemType) => (
  <>
    <div className="line-clamp-2 text-f1-foreground-secondary">{title}</div>
    <div className="font-medium">{info}</div>
  </>
)

export const TwoColumnsList = forwardRef<HTMLDivElement, TwoColumnsListType>(
  ({ list }, ref) => {
    return (
      <div ref={ref} className="grid grid-cols-[1fr_auto] gap-2">
        {list.map((item) => (
          <Item key={item.title} title={item.title} info={item.info} />
        ))}
      </div>
    )
  }
)

TwoColumnsList.displayName = "TwoColumnsList"
