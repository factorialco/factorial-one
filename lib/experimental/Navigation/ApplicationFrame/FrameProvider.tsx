import React, {
  createContext,
  PointerEvent,
  useContext,
  useMemo,
  useState,
} from "react"

type SidebarState = "locked" | "unlocked" | "hidden"

interface FrameContextType {
  sidebarState: SidebarState
  toggleSidebar: () => void
}

const FrameContext = createContext<FrameContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(FrameContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a FrameProvider")
  }
  return context
}

interface FrameProviderProps {
  children: React.ReactNode
}

export function FrameProvider({ children }: FrameProviderProps) {
  const [sidebarState, setSidebarState] = useState<SidebarState>("locked")

  const toggleSidebar = () =>
    setSidebarState((state) =>
      state === "unlocked" || state === "hidden" ? "locked" : "unlocked"
    )

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    // Add your pointer move logic here
    // For example, you could check the position and update the sidebar state
    if (e.clientX < 32 && sidebarState === "hidden") {
      setSidebarState("unlocked")
    }

    if (e.clientX > 280 && sidebarState === "unlocked") {
      setSidebarState("hidden")
    }
  }

  const value = useMemo(() => ({ sidebarState, toggleSidebar }), [sidebarState])

  return (
    <FrameContext.Provider value={value}>
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
