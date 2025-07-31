import { Counter } from "@/experimental/Information/Counter"
import { StatusTag, Variant } from "@/experimental/Information/Tags/StatusTag"

type OneLaneHeaderProps = {
  label: string
  variant?: Variant
  count: number
}

export const OneLaneHeader = ({
  label,
  variant,
  count,
}: OneLaneHeaderProps) => {
  return (
    <div className="flex items-center gap-2 px-1 py-2">
      <StatusTag text={label} variant={variant || "neutral"} />
      <Counter size="md" type="default" value={count} />
    </div>
  )
}
