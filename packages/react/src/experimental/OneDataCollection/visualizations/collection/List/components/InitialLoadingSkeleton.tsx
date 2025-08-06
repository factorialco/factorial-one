import { Skeleton } from "@/ui/skeleton"

type InitialLoadingSkeletonProps = {
  count?: number
}

/**
 * Initial Loading Skeleton: Renders skeleton items for initial loading state
 */
export const InitialLoadingSkeleton = ({
  count = 10,
}: InitialLoadingSkeletonProps) => {
  return (
    <div className="mx-4 my-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-3 p-3 md:h-18 md:flex-row md:items-center md:justify-between md:gap-2"
        >
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-28" />
            <div className="flex flex-col gap-2 md:flex-row">
              <Skeleton className="h-3 w-10" />
              <Skeleton className="h-3 w-10" />
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      ))}
    </div>
  )
}
