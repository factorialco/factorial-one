import { autoColor } from "../utils/colors"

interface RadialProgressProps {
  value: number
  color?: string
  overview?: { number: number; label: string }
}

export function RadialProgressChart({
  value,
  color = autoColor(0),
  overview,
}: RadialProgressProps) {
  const size = 100
  const center = size / 2
  const radius = center - 10 / 2
  const circumference = 2 * Math.PI * radius
  const progressOffset = ((100 - value) / 100) * circumference

  return (
    <div className="relative inline-flex aspect-video items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90 transform"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={10}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      {overview && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-muted-foreground">
            {overview.label}
          </span>
          <span className="text-3xl font-semibold text-foreground">
            {overview.number}
          </span>
        </div>
      )}
    </div>
  )
}
