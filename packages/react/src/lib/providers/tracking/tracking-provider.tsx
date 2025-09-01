"use client"

import { createContext, ReactNode, useContext, useMemo } from "react"
import { TrackingFunction } from "./types"

type ContextType = { track: TrackingFunction }

const TrackingContext = createContext<ContextType | null>(null)

export interface TrackingProviderProps {
  children: ReactNode
  trackingFunction?: TrackingFunction
}

export function TrackingProvider({
  children,
  trackingFunction,
}: TrackingProviderProps): JSX.Element {
  const value = useMemo(
    () => ({ track: trackingFunction ?? (() => Promise.resolve(false)) }),
    [trackingFunction]
  )

  return (
    <TrackingContext.Provider value={value}>
      {children}
    </TrackingContext.Provider>
  )
}

export function useTracking() {
  const context = useContext(TrackingContext)

  return context ?? { track: () => Promise.resolve(false) }
}
