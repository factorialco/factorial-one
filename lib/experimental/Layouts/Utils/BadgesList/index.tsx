import { Badge, BadgeProps } from "@/components/Information/Badge"
import { forwardRef } from "react"

interface BadgesListProps {
  badges: BadgeProps[]
}

export const BadgesList = forwardRef<HTMLDivElement, BadgesListProps>(
  function BadgesList({ badges }, ref) {
    return (
      <div ref={ref} className="flex flex-wrap gap-3">
        {badges.map(({ ...props }, index) => (
          <Badge key={index} {...props} />
        ))}
      </div>
    )
  }
)
