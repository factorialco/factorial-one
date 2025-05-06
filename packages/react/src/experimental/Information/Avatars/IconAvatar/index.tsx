import { Icon, IconType } from "@/components/Utilities/Icon"
import { cn } from "@/lib/utils"

type Props = {
  icon: IconType
  size?: "xs" | "sm" | "md" | "lg"
}

const sizes = {
  xs: "size-5",
  sm: "size-6",
  md: "size-8",
  lg: "size-14",
}

export const IconAvatar = ({ icon, size = "md" }: Props) => {
  return (
    <div
      className={cn(
        "flex aspect-square items-center justify-center rounded-full border border-solid border-f1-border-secondary bg-f1-background dark:bg-f1-background-inverse-secondary",
        sizes[size]
      )}
    >
      <Icon icon={icon} size={size} className="text-f1-foreground-secondary" />
    </div>
  )
}

IconAvatar.displayName = "IconAvatar"
