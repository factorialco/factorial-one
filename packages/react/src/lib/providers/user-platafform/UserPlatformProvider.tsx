import { createContext, useContext, useEffect, useState } from "react"
import { detectPlatform } from "./user-platform"

export type Platform = "mac" | "windows" | "linux" | "mobile" | "unknown"

type Context = {
  platform: Platform
  isDev: boolean
}

const PlatformContext = createContext<Context | null>(null)

type UserPlatformProviderProps = {
  children: React.ReactNode
  /**
   * Force set the platform. Won't trigger platform auto-detection if set.
   */
  platform?: Platform
  isDev?: boolean
}

export const UserPlatformProvider = ({
  children,
  platform,
  isDev = false,
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
    <PlatformContext.Provider value={{ platform: userPlatform, isDev }}>
      {children}
    </PlatformContext.Provider>
  )
}

export const useIsDev = () => {
  const context = useContext(PlatformContext)

  if (context === null) {
    throw new Error("useIsDev must be used within an UserPlatformProvider")
  }

  return context.isDev
}

export function useUserPlatform(): Platform {
  const context = useContext(PlatformContext)

  if (context === null) {
    throw new Error(
      "useUserPlatform must be used within an UserPlatformProvider"
    )
  }

  return context.platform
}
