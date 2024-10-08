import { Icon, IconProps } from "@/components/Utilities/Icon"
import { Cmd } from "@/icons"
import { cn } from "@/lib/utils"

interface ShortcutProps {
  keys: string[]
}

const iconMap: Record<string, IconProps["icon"]> = {
  cmd: Cmd,
}

function Shortcut({ keys }: ShortcutProps) {
  return (
    <div className="flex flex-wrap items-center gap-0.5">
      {keys.map((key, index) => {
        const lowerKey = key.toLowerCase()
        const isIcon = lowerKey in iconMap
        return (
          <kbd
            key={index}
            className={cn(
              "flex h-5 items-center justify-center rounded-xs border border-solid border-f1-border bg-f1-background-tertiary py-0.5 text-sm font-semibold uppercase leading-none text-f1-foreground-secondary",
              isIcon ? "w-5 px-0.5" : "min-w-5 px-1"
            )}
          >
            {isIcon ? <Icon icon={iconMap[lowerKey]} size="sm" /> : key}
          </kbd>
        )
      })}
    </div>
  )
}

export { Shortcut }
