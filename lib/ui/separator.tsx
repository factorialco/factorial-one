import React, { forwardRef } from "react"

export const Separator = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  return (
    <div
      ref={ref}
      className="my-4 h-[1px] w-full"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, hsl(var(--f1-border)) 0, hsl(var(--f1-border)) 3px, transparent 3px, transparent 7px)",
      }}
      {...props}
    />
  )
})
