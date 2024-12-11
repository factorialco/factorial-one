import { IconType } from "@/components/Utilities/Icon"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { cn, focusRing } from "@/lib/utils"

interface UserProps {
  firstName: string
  lastName: string
  avatarUrl?: string
  options: {
    label: string
    href?: string
    icon?: IconType
    onClick?: () => void
    critical?: boolean
  }[]
}

export function User({ firstName, lastName, avatarUrl, options }: UserProps) {
  return (
    <div className="mx-3 pb-3 pt-3">
      <Dropdown items={options}>
        <button
          className={cn(
            "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
            focusRing()
          )}
        >
          <PersonAvatar
            src={avatarUrl}
            firstName={firstName}
            lastName={lastName}
            size="xsmall"
          />
          <span className="min-w-0 truncate text-f1-foreground">
            {firstName} {lastName}
          </span>
        </button>
      </Dropdown>
    </div>
  )
}
