"use client"

import { createContext, FC, PropsWithChildren, useContext } from "react"

const AiChatLabelsContext = createContext<AiChatLabels | null>(null)

export interface AiChatLabels {
  greeting?: string
}

export const AiChatLabelsProvider: FC<PropsWithChildren<AiChatLabels>> = ({
  children,
  ...labels
}) => {
  return (
    <AiChatLabelsContext.Provider value={labels}>
      {children}
    </AiChatLabelsContext.Provider>
  )
}

export function useAiChatLabels(): AiChatLabels {
  const context = useContext(AiChatLabelsContext)

  if (context === null) {
    console.error("useAiChatLabels must be used within an AiChatLabelsProvider")
    return {}
  }

  return context
}
