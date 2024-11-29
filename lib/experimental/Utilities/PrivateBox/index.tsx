import { usePrivacyMode } from "@/lib/privacyMode"
import { cn } from "@/lib/utils"
import { FC, PropsWithChildren } from "react"

export const PrivateBox: FC<PropsWithChildren> = ({ children }) => {
  const { enabled } = usePrivacyMode()

  return (
    <div
      className={cn(
        "inline-flex",
        enabled &&
          "select-none overflow-hidden rounded-sm ring-1 ring-inset ring-f1-border-secondary"
      )}
      aria-hidden={enabled}
    >
      <div className={cn(enabled && "opacity-30 blur")}>{children}</div>
    </div>
  )
}
