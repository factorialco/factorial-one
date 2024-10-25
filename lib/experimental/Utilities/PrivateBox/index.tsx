import { usePrivacyMode } from "@/lib/privacyMode"
import { cn } from "@/lib/utils"
import { FC, PropsWithChildren } from "react"

export const PrivateBox: FC<PropsWithChildren> = ({ children }) => {
  const { enabled } = usePrivacyMode()

  return <div className={cn(enabled && "blur-md", "inline")}>{children}</div>
}
