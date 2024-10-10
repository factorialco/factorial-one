import { Avatar } from "@/experimental/Information/Avatar"
import { Dropdown } from "@/experimental/Navigation/Dropdown"

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
      <div className="flex items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover">
        <Avatar src={avatarUrl} alt={avatarAlt} size="xxsmall" />
        {name}
      </div>
    </Dropdown>
  )
}
