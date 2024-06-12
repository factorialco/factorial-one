import React, { ReactNode } from "react"
import { DialogHeader, DialogTitle } from "../Dialog"

type ActivityProps = {
  title: string
  children: ReactNode
  loading?: boolean
  error?: boolean
}

export const Activity: React.FC<ActivityProps> = ({ title, children }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      {children}
    </>
  )
}
