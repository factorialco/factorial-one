import React, { ReactNode } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../Dialog"
import { RenderedActivity } from "./types"

type ActivityProps = {
  title: string
  children: ReactNode
  loading?: boolean
  error?: unknown
}

export const ActivityContainer: React.FC<{
  activity: RenderedActivity | null
  onClose: () => void
}> = ({ onClose, activity }) => {
  return (
    activity && (
      <Dialog
        defaultOpen
        onOpenChange={(open) => {
          !open && setTimeout(() => onClose(), 200)
        }}
      >
        <DialogContent>{activity.element}</DialogContent>
      </Dialog>
    )
  )
}

export const Activity: React.FC<ActivityProps> = ({
  title,
  error,
  loading,
  children,
}) => {
  if (loading) return "Loading..."
  if (error) return "Error!"

  return (
    <>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      {children}
    </>
  )
}
