import React from "react"

export const Separator: React.FC = () => {
  return (
    <div
      className="my-4 h-[1px] w-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, hsl(var(--secondary-intermediate)) 0, hsl(var(--secondary-intermediate)) 3px, transparent 3px, transparent 7px)",
      }}
    />
  )
}
