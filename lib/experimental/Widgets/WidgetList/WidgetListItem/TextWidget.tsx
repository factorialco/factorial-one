import React from "react"
import { TextWidgetProps } from "../WidgetListItemTypes"

export const TextWidget: React.FC<TextWidgetProps> = ({ text }) => (
  <div className="border-gray-200 border-b p-4">
    <p className="text-lg font-semibold">{text}</p>
  </div>
)
