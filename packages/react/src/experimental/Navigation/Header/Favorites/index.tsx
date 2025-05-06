import { ButtonInternal } from "@/components/Actions/Button/internal"
import Star from "@/icons/app/Star"
import StarFilled from "@/icons/app/StarFilled"
import { cn } from "@/lib/utils"

export const Favorites = ({
  isMarked,
  onChange,
}: {
  isMarked: boolean
  onChange: (newValue: boolean) => void
}) => {
  return (
    <ButtonInternal
      variant="ghost"
      label="Favorites"
      hideLabel
      className={cn(
        "responsive -left-2",
        isMarked ? "[&>*>svg]:text-[hsl(var(--promote-50))]" : undefined
      )}
      icon={isMarked ? StarFilled : Star}
      onClick={() => onChange(!isMarked)}
    />
  )
}
