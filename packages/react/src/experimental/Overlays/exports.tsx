import { Component } from "../../lib/component"
import { Dialog as DialogComponent } from "./Dialog"

export const Dialog = Component(
  {
    name: "Dialog",
    type: "info",
  },
  DialogComponent
)
