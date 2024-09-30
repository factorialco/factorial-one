import { ComponentProps, forwardRef } from "react"
import { Tag } from "../Tag"

interface TagsListProps {
  tags: ComponentProps<typeof Tag>[]
}

export const TagsList = forwardRef<HTMLDivElement, TagsListProps>(
  ({ tags }, ref) => {
    return (
      <div ref={ref} className="flex flex-wrap gap-3">
        {tags.map(({ ...props }, i) => (
          <Tag key={i} {...props} />
        ))}
      </div>
    )
  }
)

TagsList.displayName = "TagsList"
