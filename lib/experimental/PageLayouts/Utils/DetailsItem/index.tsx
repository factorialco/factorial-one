import { DataList } from "@/experimental/Lists/DataList"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
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
  function DetailsItem({ title, content }, ref) {
    const contentArray = "length" in content ? content : [content]

    return (
      <div ref={ref} className="flex flex-col gap-0.5">
        <p className="pl-1.5 text-f1-foreground-secondary">{title}</p>
        {contentArray.map((c, i) => (
          <ItemContent key={i} content={c} />
        ))}
      </div>
    )
  }
)
