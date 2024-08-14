import { cn } from "@/lib/utils"
import { useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function ChartCounter({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 850,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      motionValue.set(value)
    }, 100)

    return () => clearTimeout(timer)
  }, [motionValue, value])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Math.round(latest)
          )
        }
      }),
    [springValue]
  )
  return (
    <div className="relative text-2xl font-medium tabular-nums leading-none">
      <div className="invisible" aria-hidden="true">
        {value}
      </div>
      <div
        ref={ref}
        className={cn(
          "absolute inset-0",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        aria-live="polite"
      >
        {Intl.NumberFormat("en-US").format(0)}
      </div>
    </div>
  )
}
