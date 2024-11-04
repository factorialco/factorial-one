import { PersonAvatar } from "@/experimental/Information/Avatars/UserAvatar"
import { Dropdown } from "@/experimental/Navigation/Dropdown"
import { cn, focusRing } from "@/lib/utils"

interface UserProps {
  firstName: string
  lastName: string
  avatarUrl?: string
  options: {
    label: string
    href?: string
    onClick?: () => void
  }[]
}

export function User({ firstName, lastName, avatarUrl, options }: UserProps) {
  return (
    <div className="border-t border-dashed border-transparent border-t-f1-border pt-4">
      <Dropdown items={options}>
        <button
          className={cn(
            "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
            focusRing()
          )}
        >
          <PersonAvatar
            src={avatarUrl}
            firstName={firstName}
            lastName={lastName}
            size="xsmall"
          />
          {firstName} {lastName}
        </button>
      </Dropdown>
    </div>
  )
}
