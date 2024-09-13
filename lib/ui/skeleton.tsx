import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-f1-background-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
