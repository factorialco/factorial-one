import React, {
  createContext,
  PointerEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useMediaQuery } from "usehooks-ts"
import { useNavigation } from "../../../lib/linkHandler"

type SidebarState = "locked" | "unlocked" | "hidden"

interface FrameContextType {
  isSmallScreen: boolean
  sidebarState: SidebarState
  prevSidebarState: SidebarState | null
  toggleSidebar: () => void
}

const FrameContext = createContext<FrameContextType | undefined>(undefined)

export function useSidebar(): FrameContextType {
  const context = useContext(FrameContext)
  if (context === undefined) {
    return {
      isSmallScreen: false,
      prevSidebarState: null,
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
  const { currentPath } = useNavigation()

  const isSmallScreen = useMediaQuery("(max-width: 900px)", {
    initializeWithValue: true,
  })

  const [locked, setLocked] = useState(true)
  const [visible, setVisible] = useState(false)
  const [prevSidebarState, setPrevSidebarState] = useState<SidebarState | null>(
    null
  )

  const toggleSidebar = useCallback(() => {
    if (isSmallScreen) setVisible(!visible)
    setLocked(!locked)
  }, [isSmallScreen, visible, locked, setLocked, setVisible])

  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (isSmallScreen) return

      if (e.clientX < 32) {
        setVisible(true)
      }

      if (e.clientX > 280) {
        setVisible(false)
      }
    },
    [isSmallScreen, setVisible]
  )

  const sidebarState: SidebarState = useMemo(() => {
    if (isSmallScreen) {
      if (visible) return "unlocked"
      return "hidden"
    }
    if (!locked && !visible) return "hidden"
    if (!locked && visible) return "unlocked"
    return "locked"
  }, [isSmallScreen, visible, locked])

  useEffect(() => {
    setVisible(false)
  }, [currentPath])

  useEffect(() => {
    return () => {
      setPrevSidebarState(sidebarState)
    }
  }, [sidebarState])

  return (
    <FrameContext.Provider
      value={{
        isSmallScreen,
        sidebarState,
        toggleSidebar,
        prevSidebarState,
      }}
    >
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
