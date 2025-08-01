import { IconType } from "@/factorial-one"

// Base TOC item interface without children
interface BaseTOCItem {
  id: string
  label: string
  onClick?: (id: string) => void
  icon?: IconType
  disabled?: boolean
  otherActions?: TOCItemAction[]
}

// Helper type to increment depth level (1->2->3->4->never)
type NextDepth<T> = T extends 1 ? 2 : T extends 2 ? 3 : T extends 3 ? 4 : never

// recursive type that limits nesting to exactly 4 levels
export type TOCItem<Depth extends 1 | 2 | 3 | 4 = 1> = BaseTOCItem & {
  children?: NextDepth<Depth> extends never
    ? never
    : TOCItem<NextDepth<Depth>>[]
}

export type TOCItemAction =
  | {
      label: string
      onClick: () => void
      icon?: IconType
    }
  | {
      type: "separator"
    }

export interface TOCProps {
  title: string
  items: TOCItem[]
  className?: string
  activeItem?: string
  collapsible?: boolean
}
