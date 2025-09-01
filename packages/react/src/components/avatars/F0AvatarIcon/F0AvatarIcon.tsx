import { F0Icon, F0IconType } from "@/components/F0Icon"
import { cn } from "@/lib/utils"

type Props = {
  icon: F0IconType
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizes = {
  sm: "size-6 rounded-sm",
  md: "size-9 rounded-md",
  lg: "size-10 rounded-lg",
}

export const F0AvatarIcon = ({ icon, size = "md", className }: Props) => {
  return (
    <div
      className={cn(
        "flex aspect-square items-center justify-center border border-solid border-f1-border-secondary",
        sizes[size],
        className
      )}
    >
      <F0Icon
        icon={icon}
        size={size}
        className="text-f1-foreground-secondary"
      />
    </div>
  )
}

F0AvatarIcon.displayName = "IconAvatar"
