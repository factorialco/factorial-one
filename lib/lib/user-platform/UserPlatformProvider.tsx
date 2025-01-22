import { createContext, useContext, useEffect, useState } from "react"
import { detectPlatform } from "./user-platform"

export type Platform = "mac" | "windows" | "linux" | "mobile" | "unknown"

const PlatformContext = createContext<Platform | null>(null)

export const UserPlatformProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [userPlatform, setUserPlatform] = useState<Platform>("unknown")

  useEffect(() => {
    detectPlatform().then(setUserPlatform)
  }, [])

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
