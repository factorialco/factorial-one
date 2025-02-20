import { Component } from "@/lib/component"
import { Dialog as DialogComponent } from "./Dialog"
import { ToolBar as ToolBarComponent } from "./Toolbar"

export const Dialog = Component(
  {
    name: "Dialog",
    type: "info",
  },
  DialogComponent
)

export const ToolBar = Component(
  {
    name: "ToolBar",
    type: "info",
  },
  ToolBarComponent
)
