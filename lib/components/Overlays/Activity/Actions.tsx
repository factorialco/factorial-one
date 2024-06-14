import { Button } from "@/components/Actions/Button"
import React, { ComponentProps } from "react"
import { DialogFooter } from "../Dialog"

type Action = {
  label: string
  onClick: ComponentProps<typeof Button>["onClick"]
}

export type ActionsType = {
  primary?: Action
  secondary?: Action
}

export const Actions: React.FC<ActionsType> = ({ primary, secondary }) => {
  return (
    <DialogFooter>
      {secondary && (
        <Button
          variant="secondary"
          onClick={secondary.onClick}
          label={secondary.label}
        />
      )}
      {primary && (
        <Button onClick={primary.onClick} label={primary.label}></Button>
      )}
    </DialogFooter>
  )
}
