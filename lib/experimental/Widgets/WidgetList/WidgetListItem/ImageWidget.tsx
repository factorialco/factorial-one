import React from "react"
import { ImageWidgetProps } from "../WidgetListItemTypes"

export const ImageWidget: React.FC<ImageWidgetProps> = ({ imageUrl }) => (
  <div className="border-gray-200 border-b p-4">
    <img src={imageUrl} alt="Widget" className="h-auto w-full" />
  </div>
)
