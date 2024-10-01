import { forwardRef } from "react"

export interface EventProps {
  title: string
  subtitle: string
  description: string
  color: string
  isPending: boolean
}

export const Event = forwardRef<HTMLDivElement, EventProps>(function Event(
  { title, subtitle, description, color, isPending },
  ref
) {
  return (
    <div
      ref={ref}
      className="relative flex flex-row items-stretch gap-3 overflow-hidden rounded-sm px-2 py-1.5"
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 opacity-10"
        style={{
          background: `linear-gradient(to right, ${color}, transparent)`,
        }}
      />
      <div
        className="min-h-10 min-w-1 rounded-2xs"
        style={
          isPending
            ? {
                backgroundImage: `repeating-linear-gradient(
              135deg,
              ${color} 0px,
              ${color} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`,
              }
            : {
                backgroundColor: color,
              }
        }
      />
      <div className="flex flex-col gap-0.5">
        <p className="line-clamp-3 font-medium">
          {title}
          <span className="pl-1">{subtitle}</span>
        </p>
        <p className="text-f1-foreground-secondary">{description}</p>
      </div>
    </div>
  )
})
