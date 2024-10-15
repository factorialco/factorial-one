import { useMediaQuery } from "@/lib/useMediaQuery"
import React, {
  createContext,
  PointerEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type SidebarState = "locked" | "unlocked" | "hidden"

interface FrameContextType {
  sidebarState: SidebarState
  toggleSidebar: () => void
}

const FrameContext = createContext<FrameContextType | undefined>(undefined)

export function useSidebar(): FrameContextType {
  const context = useContext(FrameContext)
  if (context === undefined) {
    return {
      sidebarState: "locked",
      toggleSidebar: () => {},
    }
  }
  return context
}

interface FrameProviderProps {
  children: React.ReactNode
}

export function FrameProvider({ children }: FrameProviderProps) {
  const isSmallScreen = useMediaQuery("(max-width: 480px)")
  const [sidebarState, setSidebarState] = useState<SidebarState>(() =>
    isSmallScreen ? "hidden" : "locked"
  )

  useEffect(() => {
    if (isSmallScreen && sidebarState === "locked") {
      setSidebarState("hidden")
    }
  }, [isSmallScreen, sidebarState])

  const toggleSidebar = useCallback(() => {
    if (isSmallScreen) {
      setSidebarState((state) => (state === "hidden" ? "unlocked" : "hidden"))
    } else {
      setSidebarState((state) =>
        state === "unlocked" || state === "hidden" ? "locked" : "unlocked"
      )
    }
  }, [isSmallScreen])

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isSmallScreen) {
      if (e.clientX < 32 && sidebarState === "hidden") {
        setSidebarState("unlocked")
      }

      if (e.clientX > 280 && sidebarState === "unlocked") {
        setSidebarState("hidden")
      }
    }
  }

  const value = useMemo(
    () => ({ sidebarState, toggleSidebar }),
    [sidebarState, toggleSidebar]
  )

  return (
    <FrameContext.Provider value={value}>
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
