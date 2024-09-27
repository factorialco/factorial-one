import { ComponentProps, forwardRef } from "react"
import { IconText } from "../IconText"

interface IconTextsListProps {
  list: ComponentProps<typeof IconText>[]
}

export const IconTextsList = forwardRef<HTMLDivElement, IconTextsListProps>(
  ({ list }, ref) => {
    return (
      <div ref={ref} className="mt-2 flex flex-col gap-2">
        {list.map((item) => (
          <IconText key={item.texts[0]} icon={item.icon} texts={item.texts} />
        ))}
      </div>
    )
  }
)

IconTextsList.displayName = "IconTextsList"
