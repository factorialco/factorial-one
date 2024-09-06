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

type ListProps = {
  title?: string
  items: ListItem[]
}

const ListItem = ({ item }: { item: ListItem }) => (
  <div className="mb-2 flex w-full gap-4 last:mb-0">
    <span className="flex-grow text-muted-foreground">{item.name}</span>
    {typeof item.value === "number" ? (
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
    <div className="w-full">
      {title && <h2 className="mb-2 text-base font-medium">{title}</h2>}
      <div className="w-full">
        {items.map((item) => (
          <ListItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

export { List }
