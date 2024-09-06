import { autoColor } from "../utils/colors"

export interface RadialProgressProps {
  value: number
  max?: number
  color?: string
  overview?: { number: number; label: string }
}

export function RadialProgressChart({
  value,
  max = 100,
  color = autoColor(0),
  overview,
}: RadialProgressProps) {
  const strokeWidth = 12
  const size = 100
  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const progressOffset = ((max - Math.min(value, max)) / max) * circumference

  return (
    <div className="relative inline-flex aspect-video items-center justify-center overflow-hidden">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-full w-full -rotate-90 transform"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      {overview && (
        <div className="absolute inset-0 flex translate-y-0.5 flex-col items-center justify-center">
          <span className="text-sm text-muted-foreground">
            {overview.label}
          </span>
          <span className="text-2xl font-semibold leading-none text-foreground">
            {overview.number}
          </span>
        </div>
      )}
    </div>
  )
}
