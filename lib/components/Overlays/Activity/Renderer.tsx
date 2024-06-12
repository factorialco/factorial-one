import React, { ReactNode } from "react"
import { DialogHeader, DialogTitle } from "../Dialog"

type ActivityProps = {
  title: string
  children: ReactNode
  loading?: boolean
  error?: unknown
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
