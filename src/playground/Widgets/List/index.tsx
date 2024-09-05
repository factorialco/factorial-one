import { ProgressBar } from "@/components/Charts/ProgressChart"

interface BaseListItem {
  name: string
}

interface DefaultListItem extends BaseListItem {
  value: number | string
}

interface ProgressListItem extends BaseListItem {
  value: number
}

type ListItem = DefaultListItem | ProgressListItem

interface ListProps {
  items: ListItem[]
  title?: string
  variant?: "default" | "progress"
}

const ListItem = ({
  item,
  variant = "default",
}: {
  item: ListItem
  variant?: "default" | "progress"
}) => (
  <div className="mb-2 flex w-full items-center last:mb-0">
    <span className="flex-grow truncate text-muted-foreground">
      {item.name}
    </span>
    {variant === "default" ? (
      <span className="ml-4 flex-shrink-0 text-right text-sm font-medium">
        {item.value}
      </span>
    ) : (
      <div className="ml-4 w-24 shrink-0">
        <ProgressBar value={item.value as number} label={`${item.value}%`} />
      </div>
    )}
  </div>
)

const List = ({ items, title, variant = "default" }: ListProps) => (
  <div className="w-full">
    {title && <h2 className="mb-2 text-base font-medium">{title}</h2>}
    <div className="w-full">
      {items.map((item, index) => (
        <ListItem key={index} item={item} variant={variant} />
      ))}
    </div>
  </div>
)

const ProgressList = (props: Omit<ListProps, "variant">) => (
  <List {...props} variant="progress" />
)

List.Progress = ProgressList

export { List }
