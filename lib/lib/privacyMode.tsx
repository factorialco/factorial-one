import * as React from "react"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react"

export const PrivacyModeContext = createContext<{
  enabled: boolean
  enable: () => void
  disable: () => void
  toggle: () => void
}>({
  enabled: false,
  enable: () => null,
  disable: () => null,
  toggle: () => null,
})

export const PrivacyModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [enabled, setEnabled] = useState(false)

  const enable = useCallback(() => {
    setEnabled(true)
  }, [])

  const disable = useCallback(() => setEnabled(false), [])

  const toggle = useCallback(() => setEnabled((e) => !e), [])

  return (
    <PrivacyModeContext.Provider value={{ enable, disable, toggle, enabled }}>
      {children}
    </PrivacyModeContext.Provider>
  )
}

export const usePrivacyMode = () => {
  return useContext(PrivacyModeContext)
}
