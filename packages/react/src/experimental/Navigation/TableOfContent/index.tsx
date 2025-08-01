import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import { Item } from "./Item"
import { SectionHeader } from "./SectionHeader"
import { TOCItem, TOCItemAction, TOCProps } from "./types"

function renderTOCItem(item: TOCItem, activeItem?: string): React.ReactElement {
  const Component = item.children ? SectionHeader : Item

  return (
    <Component key={item.id} item={item} isActive={activeItem === item.id}>
      {item.children &&
        (item.children as TOCItem[]).map((child) =>
          renderTOCItem(child, activeItem)
        )}
    </Component>
  )
}

export function TableOfContent({
  title,
  items,
  className,
  activeItem,
}: TOCProps) {
  return (
    <nav
      className={cn("flex h-full w-64 flex-col", className)}
      aria-label="Table of contents"
    >
      <div className="pb-2 pl-6 pr-4 pt-5">
        <h2 className="text-lg font-medium text-f1-foreground-secondary">
          {title}
        </h2>
      </div>
      <ScrollArea className="h-full px-3">
        <div className="pb-2">
          {items.map((item) => renderTOCItem(item, activeItem))}
        </div>
      </ScrollArea>
    </nav>
  )
}

// Export subcomponents for advanced usage
export { Item, SectionHeader }
export type { TOCItem, TOCItemAction, TOCProps }
