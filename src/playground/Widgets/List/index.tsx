import { ProgressBar } from "@/components/Charts/ProgressChart"

interface BaseListItem {
  name: string
}

interface DefaultListItem extends BaseListItem {
  type?: "default"
  value: number | string
}

interface ProgressListItem extends BaseListItem {
  type: "progress"
  value: number
}

type ListItem = DefaultListItem | ProgressListItem

type ListProps = {
  title?: string
  items: ListItem[]
}

const ListItem = ({ item }: { item: ListItem }) => (
  <div className="flex w-full gap-4">
    <span className="flex-grow text-muted-foreground">{item.name}</span>
    {item.type === "progress" ? (
      <div className="w-24 flex-shrink-0">
        <ProgressBar value={item.value} label={`${item.value}%`} />
      </div>
    ) : (
      <span className="flex-shrink-0 font-medium">{item.value}</span>
    )}
  </div>
)

function List({ items, title }: ListProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {title && <h2 className="text-base font-medium">{title}</h2>}
      {items.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </div>
  )
}

export { List }
