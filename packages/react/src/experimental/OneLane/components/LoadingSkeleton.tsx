import { F0Card } from "@/components/F0Card"
import { forwardRef } from "react"

// TODO: This 3 dots is a own invention... I have to talk with a designer to see if we can use something else. Maybe a fade-off effect?
export const LoadingSkeleton = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="space-y-1">
      {Array.from({ length: 2 }).map((_, i) => (
        <F0Card.Skeleton compact key={i} />
      ))}
      <div className="flex h-full w-full items-center justify-center p-2 pb-4">
        ...
      </div>
    </div>
  )
})

LoadingSkeleton.displayName = "LoadingSkeleton"
