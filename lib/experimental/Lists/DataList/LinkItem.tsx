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
      actionIcon={({ className }) => (
        <Icon
          aria-hidden={true}
          icon={ChevronRight}
          size="md"
          className={className}
        />
      )}
    />
  )
})

LinkItem.displayName = "LinkItem"
