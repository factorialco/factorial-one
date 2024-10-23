import { memo, MouseEventHandler } from "react"

import { Icon } from "@/components/Utilities/Icon"
import { ItemProps } from "@/experimental/Lists/DataList"
import { ItemContainer } from "@/experimental/Lists/DataList/ItemContainer"
import ChevronRight from "@/icons/ChevronRight"

type LinkItemProps = ItemProps & {
  href: string
  onClick: MouseEventHandler<HTMLAnchorElement>
}

export const LinkItem = memo(({ onClick, href, icon, text }: LinkItemProps) => {
  return (
    <ItemContainer
      as="a"
      text={text}
      leftIcon={icon}
      href={href}
      onClick={(e) => {
        if (e.ctrlKey || e.metaKey || e.button === 1) {
          // Let the browser open the link in a new tab, no custom navigation needed
          return
        }
        e.preventDefault()
        onClick(e)
      }}
      className="text-inherit focus-visible:outline-f1-border-selected-bold group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground no-underline hover:bg-f1-background-secondary focus-visible:outline focus-visible:outline-2"
      actionIcon={() => (
        <Icon
          aria-hidden={true}
          icon={ChevronRight}
          size="md"
          className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      )}
    />
  )
})

LinkItem.displayName = "LinkItem"
