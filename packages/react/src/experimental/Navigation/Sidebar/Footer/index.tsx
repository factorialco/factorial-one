import { Button } from "@/components/Actions/Button"
import { Badge } from "@/experimental/exports"
import { PersonAvatar } from "@/experimental/Information/Avatars/PersonAvatar"
import { Circle as CircleIcon, Feed as FeedIcon } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"
import { Dropdown, DropdownItem } from "../../Dropdown"

interface SidebarFooterProps {
  user: {
    firstName: string
    lastName: string
    avatarUrl?: string
  }
  showActivityButton?: boolean
  hasActivityUpdates?: boolean
  onActivityButtonClick?: () => void
  options: DropdownItem[]
}

export function SidebarFooter({
  user,
  options,
  showActivityButton = false,
  onActivityButtonClick,
  hasActivityUpdates,
}: SidebarFooterProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-3 p-3">
      <div className="flex-1">
        <Dropdown items={options}>
          <button
            className={cn(
              "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
              focusRing("focus-visible:ring-inset")
            )}
          >
            <PersonAvatar
              src={user.avatarUrl}
              firstName={user.firstName}
              lastName={user.lastName}
              size="xsmall"
            />
            <span className="min-w-0 truncate text-f1-foreground">
              {user.firstName} {user.lastName}
            </span>
          </button>
        </Dropdown>
      </div>
      {showActivityButton && (
        <div className="relative">
          <Button
            icon={FeedIcon}
            label="Activity"
            onClick={onActivityButtonClick}
            variant="ghost"
            hideLabel
          />
          {hasActivityUpdates && (
            <div className="absolute -right-1 -top-1 rounded-full bg-f1-background">
              <Badge type="highlight" size="sm" icon={CircleIcon} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
