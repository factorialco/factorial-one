import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  useEffect,
  useState,
} from "react"

type SvgType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

export const MorphingSvg: React.FC<{
  svg1: SvgType
  svg2: SvgType
  className?: string
  duration?: number
}> = ({ svg1: Svg1, svg2: Svg2, className, duration = 2 }) => {
  const [paths1, setPaths1] = useState<string[]>([])
  const [paths2, setPaths2] = useState<string[]>([])

  useEffect(() => {
    const svg1Paths = document.getElementById("svg1")?.querySelectorAll("path")
    const svg2Paths = document.getElementById("svg2")?.querySelectorAll("path")

    if (svg1Paths && svg2Paths) {
      const paths1 = Array.from(svg1Paths).map(
        (path) => path.getAttribute("d") || ""
      )
      const paths2 = Array.from(svg2Paths).map(
        (path) => path.getAttribute("d") || ""
      )

      const maxLength = Math.max(paths1.length, paths2.length)
      const filledPaths1 = [
        ...paths1,
        ...Array(maxLength - paths1.length).fill(
          paths1[paths1.length - 1] || ""
        ),
      ]
      const filledPaths2 = [
        ...paths2,
        ...Array(maxLength - paths2.length).fill(
          paths2[paths2.length - 1] || ""
        ),
      ]

      setPaths1(filledPaths1)
      setPaths2(filledPaths2)
    }
  }, [])

  const MorphedSvg = () => (
    <svg className="h-full w-full" viewBox="0 0 24 24">
      {paths1.map((d, index) => (
        <motion.path
          key={index}
          initial={{ d: paths1[index] || paths2[index] }}
          animate={{ d: paths2[index] || paths1[index] }}
          transition={{ duration: duration, ease: "easeInOut" }}
          fill="currentColor"
        />
      ))}
    </svg>
  )

  return (
    <div className={cn("relative h-full w-full", className)}>
      <div className="absolute inset-0 opacity-0">
        <Svg1 id="svg1" />
        <Svg2 id="svg2" />
      </div>
      <MorphedSvg key={`${paths1.join()}-${paths2.join()}`} />
    </div>
  )
}
