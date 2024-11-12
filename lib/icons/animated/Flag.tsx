import { motion, Transition, Variants } from "framer-motion"
import * as React from "react"

const flagTransition: Transition = {
  duration: 0.7,
  ease: [0.42, 0, 0.58, 1],
}

const flagVariants: Variants = {
  normal: {
    skewY: 0,
    y: 0,
    scaleX: 1,
    originX: "50%",
    originY: "60%",
  },
  animate: {
    skewY: [0, -15, 15, 0],
    y: [0, -2, 2, 0],
    scaleX: [1, 1.1, 1.1, 1],
  },
}

interface FlagProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const FlagAnimated = React.forwardRef<SVGSVGElement, FlagProps>(
  ({ animate = "normal", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="1.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M6 5.50001C9.5 4.50001 11 5.00001 12.5 6.00001C14 7 16 7.00002 18 5.50002V15C16 16.5 14 16.5 12.5 15.5C11 14.5 9.5 14 6 15"
          initial="normal"
          variants={flagVariants}
          animate={animate}
          transition={flagTransition}
          vectorEffect="non-scaling-stroke"
        />
        <path d="M6 4V20" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
)

FlagAnimated.displayName = "FlagAnimated"

export default FlagAnimated
