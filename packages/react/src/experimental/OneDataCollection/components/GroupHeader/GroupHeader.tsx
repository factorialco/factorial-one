import { Await } from "@/components/Utilities/Await"
import { Counter } from "@/experimental/Information/Counter"
import { ChevronToggle } from "@/ui/ChevronToggle/ChevronToggle"
import { Skeleton } from "@/ui/skeleton"
import { useState } from "react"

type GroupHeaderProps = {
  label: string | Promise<string>
  itemCount: number | Promise<number | undefined> | undefined
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export const GroupHeader = ({
  label,
  itemCount,
  open,
  onOpenChange,
}: GroupHeaderProps) => {
  const [isOpen, setIsOpen] = useState(open)

  const handleOpenChange = () => {
    setIsOpen(!isOpen)
    onOpenChange?.(!isOpen)
  }

  return (
    <div className="flex items-center gap-2" onClick={handleOpenChange}>
      <ChevronToggle open={isOpen} />
      <Await resolve={label} fallback={<Skeleton className="h-4 w-24" />}>
        {(label) => (
          <h6 className="text-sm font-semibold text-f1-foreground">{label}</h6>
        )}
      </Await>

      <Await resolve={itemCount} fallback={<Skeleton className="h-4 w-5" />}>
        {(count) => count !== undefined && <Counter value={count} />}
      </Await>
    </div>
  )
}
