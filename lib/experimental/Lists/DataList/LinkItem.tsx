import { memo } from "react"

import { Icon } from "@/components/Utilities/Icon"
import { ItemProps } from "@/experimental/Lists/DataList"
import { ItemContainer } from "@/experimental/Lists/DataList/ItemContainer"
import ChevronRight from "@/icons/app/ChevronRight"

type LinkItemProps = ItemProps & {
  href: string
}

export const LinkItem = memo(({ href, icon, text }: LinkItemProps) => {
  return (
    <ItemContainer
      as="a"
      text={text}
      leftIcon={icon}
      href={href}
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
