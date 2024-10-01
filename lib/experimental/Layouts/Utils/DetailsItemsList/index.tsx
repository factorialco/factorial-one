import { forwardRef } from "react"
import { DetailsItem, DetailsItemType } from "../DetailsItem"

interface DetailsItemsListProps {
  title: string
  details: DetailsItemType[]
}

export const DetailsItemsList = forwardRef<
  HTMLDivElement,
  DetailsItemsListProps
>(function DetailsItemList({ title, details }, ref) {
  return (
    <div ref={ref} className="flex flex-col gap-4">
      {!!title && (
        <p className="mb-1 text-sm font-semibold text-f1-foreground-secondary">
          {title.toLocaleUpperCase()}
        </p>
      )}
      <div className="flex flex-col gap-5">
        {details?.map((item) => {
          return !item?.title || !item?.content ? null : (
            <DetailsItem
              title={item.title}
              key={item.title}
              content={item.content}
            />
          )
        })}
      </div>
    </div>
  )
})
