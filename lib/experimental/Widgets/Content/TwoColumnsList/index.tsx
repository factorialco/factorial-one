import { forwardRef, ReactNode } from "react"

interface TwoColumnsItemType {
  title: string
  info: string | ReactNode
}

interface TwoColumnsListType {
  title?: string
  list: TwoColumnsItemType[]
}

const Item = ({ title, info }: TwoColumnsItemType) => (
  <div className="flex items-center justify-between">
    <div className="flex text-f1-foreground-secondary">{title}</div>
    <div className="basis-16 justify-self-end text-right font-medium">
      {info}
    </div>
  </div>
)

export const TwoColumnsList = forwardRef<HTMLDivElement, TwoColumnsListType>(
  function TwoColumnsList({ title, list }, ref) {
    return (
      <div ref={ref} className="flex flex-col gap-2">
        {title && <div className="font-medium">{title}</div>}
        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <Item key={item.title} title={item.title} info={item.info} />
          ))}
        </div>
      </div>
    )
  }
)
