import React, { createContext, useContext, useMemo, useState } from "react"

interface FrameContextType {
  isSidebarExpanded: boolean
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
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  const toggleSidebar = () => setIsSidebarExpanded((prev) => !prev)

  const value = useMemo(
    () => ({ isSidebarExpanded, toggleSidebar }),
    [isSidebarExpanded]
  )

  return <FrameContext.Provider value={value}>{children}</FrameContext.Provider>
}
