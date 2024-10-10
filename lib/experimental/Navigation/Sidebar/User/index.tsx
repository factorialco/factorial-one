import { Avatar } from "@/experimental/Information/Avatar"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { cn, focusRing } from "@/lib/utils"

interface UserProps {
  name: string
  avatarUrl?: string
  avatarAlt: string
  options: {
    label: string
    href?: string
    onClick?: () => void
  }[]
}

export function User({ name, avatarUrl, avatarAlt, options }: UserProps) {
  return (
    <Dropdown items={options}>
      <button
        className={cn(
          "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
          focusRing()
        )}
      >
        <Avatar src={avatarUrl} alt={avatarAlt} size="xxsmall" />
        {name}
      </button>
    </Dropdown>
  )
}
