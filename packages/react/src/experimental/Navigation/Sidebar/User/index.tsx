import { PersonAvatar } from "../../../Information/Avatars/PersonAvatar"
import { Dropdown, DropdownItem } from "../../Dropdown"
import { cn, focusRing } from "../../../../lib/utils"

interface UserProps {
  firstName: string
  lastName: string
  avatarUrl?: string
  options: DropdownItem[]
}

export function User({ firstName, lastName, avatarUrl, options }: UserProps) {
  return (
    <div className="mx-3 pb-3 pt-3">
      <Dropdown items={options}>
        <button
          className={cn(
            "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
            focusRing("focus-visible:ring-inset")
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
