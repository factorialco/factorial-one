"use client"

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"
import { AiChatMode } from ".."

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

export interface AiChatState {
  greeting?: string
  initialMode: AiChatMode
  enabled: boolean
}
type AiChatProviderReturnValue = {
  mode: AiChatMode
  setMode: React.Dispatch<React.SetStateAction<AiChatMode>>
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
} & Pick<AiChatState, "greeting">

export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  initialMode,
  ...rest
}) => {
  const [mode, setMode] = useState<AiChatMode>(initialMode)
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  return (
    <AiChatStateContext.Provider
      value={{
        ...rest,
        mode,
        setMode,
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        open,
        setOpen,
      }}
    >
      {children}
    </AiChatStateContext.Provider>
  )
}

export function useAiChat(): AiChatProviderReturnValue {
  const context = useContext(AiChatStateContext)

  if (context === null) {
    console.error("useAiChatLabels must be used within an AiChatLabelsProvider")
    return {
      mode: "popup",
      setMode: () => {},
      enabled: false,
      setEnabled: () => {},
      open: false,
      setOpen: () => {},
    }
  }

  return context
}
