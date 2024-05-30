import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

declare global {
  interface Window {
    XRay: {
      toggle: () => void
    }
  }
}

export const XRayContext = createContext<{
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}>({ enabled: false, setEnabled: () => null })

export const XRayProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    window.XRay = {
      toggle: () => setEnabled((enabled) => !enabled),
    }
  }, [setEnabled])

  return (
    <XRayContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </XRayContext.Provider>
  )
}

export const useXRay = () => {
  return useContext(XRayContext)
}
