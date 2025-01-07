import { Icon, IconProps } from "@/components/Utilities/Icon"
import { Cmd } from "@/icons/app"
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

const shortcutVariants = cva(
  "flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 text-sm font-semibold uppercase leading-none",
  {
    variants: {
      variant: {
        default:
          "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
        inverse:
          "border-f1-border-inverse text-f1-foreground-inverse-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
  keys: string[]
}

const iconMap: Record<string, IconProps["icon"]> = {
  cmd: Cmd,
}

function Shortcut({ keys, variant }: ShortcutProps) {
  return (
    <div className="flex flex-wrap items-center gap-0.5">
      {keys.map((key, index) => {
        const lowerKey = key.toLowerCase()
        const isIcon = lowerKey in iconMap
        return (
          <kbd
            key={index}
            role="term"
            className={cn(
              shortcutVariants({ variant }),
              isIcon ? "w-5 px-0.5" : "min-w-5 px-1"
            )}
          >
            {isIcon ? (
              <Icon data-testid="cmd-icon" icon={iconMap[lowerKey]} size="sm" />
            ) : (
              key
            )}
          </kbd>
        )
      })}
    </div>
  )
}

export { Shortcut }
