import { createContext, useContext, useEffect, useState } from "react"
import { detectPlatform } from "./user-platform"

export type Platform = "mac" | "windows" | "linux" | "mobile" | "unknown"

const PlatformContext = createContext<Platform | null>(null)

type UserPlatformProviderProps = {
  children: React.ReactNode
  /**
   * Force set the platform. Won't trigger platform auto-detection if set.
   */
  platform?: Platform
}

export const UserPlatformProvider = ({
  children,
  platform,
}: UserPlatformProviderProps) => {
  const [userPlatform, setUserPlatform] = useState<Platform>(
    platform ?? "unknown"
  )

  useEffect(() => {
    if (platform === undefined) {
      detectPlatform().then(setUserPlatform)
    }
  }, [platform])

  return (
    <PlatformContext.Provider value={userPlatform}>
      {children}
    </PlatformContext.Provider>
  )
}

export function useUserPlatform(): Platform {
  const context = useContext(PlatformContext)

  if (context === null) {
    throw new Error(
      "useUserPlatform must be used within an UserPlatformProvider"
    )
  }

  return context
}
