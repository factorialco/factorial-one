import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"
import { autoColor } from "../utils/colors"

export interface CategoryBarProps {
  data: {
    name: string
    value: number
    color?: string
    muted?: boolean
  }[]
  legend: boolean
}

export function CategoryBar({ data, legend = true }: CategoryBarProps) {
  const total = data.reduce((sum, category) => sum + category.value, 0)

  return (
    <TooltipProvider>
      <div className="w-full">
        <div className="flex h-2 gap-1 overflow-hidden">
          {data.map((category, index) => {
            const percentage = (category.value / total) * 100
            const color = category.color || autoColor(index)

            const formatPercentage = (value: number): string => {
              const percentage = (value / total) * 100
              return percentage % 1 === 0
                ? percentage.toFixed(0)
                : percentage.toFixed(1)
            }

            return (
              <Tooltip key={category.name}>
                <TooltipTrigger
                  className="h-full cursor-default overflow-hidden rounded-sm"
                  style={{ width: `${percentage}%` }}
                  title={category.name}
                  asChild
                >
                  <div
                    className="relative h-full w-full"
                    style={{ backgroundColor: color }}
                    role="img"
                    title={category.name}
                    tabIndex={0}
                  >
                    {category.muted && (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `repeating-linear-gradient(
                          135deg,
                          rgba(255,255,255,0.2),
                          rgba(255,255,255,0.2) 2px,
                          transparent 2px,
                          transparent 6px
                        )`,
                        }}
                      />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1 text-sm">
                  <div
                    className="h-2.5 w-2.5 shrink-0 translate-y-px rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="pl-0.5 pr-2 text-muted-foreground">
                    {category.name}
                  </span>
                  <span className="font-mono font-medium tabular-nums text-foreground">
                    {category.value} ({formatPercentage(category.value)}%)
                  </span>
                </TooltipContent>
              </Tooltip>
            )
          })}
        </div>
      </div>
      {legend && (
        <div
          className="mt-1 flex w-full flex-wrap gap-x-2.5 gap-y-0.5"
          role="list"
        >
          {data.map((category, index) => {
            const color = category.color || autoColor(index)

            return (
              <div
                key={category.name}
                className="flex items-center gap-1"
                role="listitem"
              >
                <div
                  className="h-2 w-2 shrink-0 translate-y-px rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm tracking-wide text-muted-foreground">
                  {category.name}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </TooltipProvider>
  )
}
