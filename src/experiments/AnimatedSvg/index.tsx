import { cn } from "@/lib/utils"
import { useAnimate } from "framer-motion"
import {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  useEffect,
} from "react"

type SvgType = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>

export const AnimatedSvg: React.FC<{ svg: SvgType; className?: string }> = ({
  svg,
  className,
}) => {
  const [scope, animate] = useAnimate()

  const Component = svg

  useEffect(() => {
    const enterAnimation = async () => {
      await animate(
        "path",
        {
          stroke: "currentColor",
          strokeWidth: [0.2, 0],
          pathLength: [0, 1],
          fillOpacity: [0, 1],
        },
        {
          duration: 5,
          fillOpacity: { duration: 3 },
        }
      )
    }
    enterAnimation()
  }, [animate])

  return <Component className={cn("h-full w-full", className)} ref={scope} />
}
