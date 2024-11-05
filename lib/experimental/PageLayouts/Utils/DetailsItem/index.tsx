import { DataList } from "@/experimental/Lists/DataList"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { cn } from "@/lib/utils"
import { isArray } from "lodash"
import { ComponentProps, FC, forwardRef } from "react"

type Content =
  | (ComponentProps<typeof DataList.Item> & {
      type: "item"
    })
  | (ComponentProps<typeof DataList.PersonItem> & {
      type: "person"
    })
  | (ComponentProps<typeof DataList.CompanyItem> & {
      type: "company"
    })
  | (ComponentProps<typeof DataList.TeamItem> & {
      type: "team"
    })
  | (ComponentProps<typeof Weekdays> & {
      type: "weekdays"
    })

export interface DetailsItemType {
  title: string
  content: Content | Content[]
  spacingAtTheBottom?: boolean
}

const ItemContent: FC<{ content: Content }> = ({ content }) => (
  <>
    {content.type === "weekdays" && (
      <div className="px-1.5 py-1">
        <Weekdays {...content} />
      </div>
    )}
    {content.type === "person" && <DataList.PersonItem {...content} />}
    {content.type === "item" && <DataList.Item {...content} />}
    {content.type === "team" && <DataList.TeamItem {...content} />}
    {content.type === "company" && <DataList.CompanyItem {...content} />}
  </>
)

export const DetailsItem = forwardRef<HTMLDivElement, DetailsItemType>(
  function DetailsItem({ title, content, spacingAtTheBottom }, ref) {
    const contentArray = isArray(content) ? content : [content]

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-0.5", spacingAtTheBottom && "pb-3")}
      >
        <DataList label={title}>
          {contentArray.map((c, i) => (
            <ItemContent key={i} content={c} />
          ))}
        </DataList>
      </div>
    )
  }
)
