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
        <p className="mb-1 pl-3 text-sm font-semibold text-f1-foreground-secondary">
          {title.toLocaleUpperCase()}
        </p>
      )}
      <div className="flex flex-col gap-1">
        {details?.map((item) => (
          <DetailsItem
            title={item.title}
            key={item.title}
            content={item.content}
            spacingAtTheBottom={item.spacingAtTheBottom}
          />
        ))}
      </div>
    </div>
  )
})
