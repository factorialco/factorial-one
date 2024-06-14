import React, { ReactElement, ReactNode, useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../Dialog"
import { Actions, ActionsType } from "./Actions"
import { SerializableProps } from "./types"

type ActivityProps = {
  title: string
  description: string
  children: ReactNode
  loading?: boolean
  error?: unknown
  actions?: ActionsType
}

export type RenderedActivity = {
  element: ReactElement
  data: SerializableProps
  onClose?: () => void
}

export const ActivityContext = React.createContext<{
  closeActivity: () => void
} | null>(null)

export const useActivity = () => {
  const context = React.useContext(ActivityContext)
  if (!context) {
    throw new Error("useActivity must be used within a ActivityProvider")
  }
  return context
}

export const ActivityContainer: React.FC<{
  activity: RenderedActivity | null
  onClose: () => void
}> = ({ onClose, activity }) => {
  const [open, setOpen] = useState(true)
  useEffect(() => {
    if (activity) {
      setOpen(true)
    }
  }, [activity])

  return (
    activity && (
      <ActivityContext.Provider value={{ closeActivity: () => setOpen(false) }}>
        <Dialog
          open={open}
          onOpenChange={(open) => {
            setOpen(open)
            !open && setTimeout(() => onClose(), 200)
          }}
        >
          <DialogContent>{activity.element}</DialogContent>
        </Dialog>
      </ActivityContext.Provider>
    )
  )
}

export const Activity: React.FC<ActivityProps> = ({
  title,
  error,
  description,
  loading,
  actions,
  children,
}) => {
  if (loading) return "Loading..."
  if (error) return "Error!"

  return (
    <>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
      {actions && <Actions {...actions} />}
    </>
  )
}
