import { Card, CardContent } from "@/ui/Card"
import { Skeleton } from "@/ui/skeleton"
import { forwardRef } from "react"

// TODO: @DaniMoreno is doing a CardSkeleton component, we should use that instead
function OneCardSkeleton() {
  return (
    <Card className="group relative bg-f1-background shadow-none transition-all">
      <div className="flex flex-col gap-2">
        <CardContent>
          <div className="flex flex-col gap-0.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex h-8 items-center gap-1.5">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

// TODO: This 3 dots is a own invention... I have to talk with a designer to see if we can use something else. Maybe a fade-off effect?
export const LoadingSkeleton = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="space-y-1">
      {Array.from({ length: 2 }).map((_, i) => (
        <OneCardSkeleton key={i} />
      ))}
      <div className="flex h-full w-full items-center justify-center p-2 pb-4">
        ...
      </div>
    </div>
  )
})

LoadingSkeleton.displayName = "LoadingSkeleton"
