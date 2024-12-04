import { Icon } from "@/components/Utilities/Icon"
import { Dropdown, DropdownItem } from "@/experimental/Navigation/Dropdown"
import { Question } from "@/icons/app"
import { cn, focusRing } from "@/lib/utils"

interface Option {
  title?: string
  description?: string
  href?: string
  onClick?: () => void
  target?: string
}

interface OmniButtonProps {
  label: string
  options: Option[]
  hasNewUpdate?: boolean
}

// Function to format the options that comes from Factorial for the dropdown
function formatDropdownItems(options: Option[]): DropdownItem[] {
  return options
    .filter((option) => !!option.title)
    .map(({ title, description, href, onClick, target: _ }) => ({
      label: title!,
      description,
      href,
      onClick,
    }))
}

export function OmniButton({ label, options, hasNewUpdate }: OmniButtonProps) {
  return (
    <div
      className="fixed z-10"
      style={{
        bottom: `calc(8px + env(safe-area-inset-bottom))`,
        right: `calc(8px + env(safe-area-inset-right))`,
      }}
    >
      <Dropdown items={formatDropdownItems(options)}>
        <button
          className={cn(
            "relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-bold text-f1-foreground-inverse shadow-md transition-all",
            focusRing()
          )}
          aria-label={label}
        >
          <Icon icon={Question} size="sm" />
          {hasNewUpdate && (
            <div className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical" />
          )}
        </button>
      </Dropdown>
    </div>
  )
}
