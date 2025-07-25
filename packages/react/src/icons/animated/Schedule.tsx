import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const clockTransition: Transition = {
  duration: 0.7,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const clockVariants: Variants = {
  normal: {
    scale: 1,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    scale: [1, 0.8, 1],
  },
}

const lineTransition: Transition = {
  duration: 0.9,
  ease: [0.645, 0.045, 0.355, 1],
}

const lineVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
  },
}

interface ScheduleProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const ScheduleAnimated = React.forwardRef<SVGSVGElement, ScheduleProps>(
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
        <path
          d="M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9"
          vectorEffect="non-scaling-stroke"
        />
        <motion.g
          variants={clockVariants}
          animate={animate}
          initial="normal"
          transition={clockTransition}
        >
          <rect
            x="13"
            y="11"
            width="9"
            height="9"
            rx="4.5"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5"
            vectorEffect="non-scaling-stroke"
          />
        </motion.g>
        <motion.path
          d="M7 10L11 10"
          variants={lineVariants}
          animate={animate}
          initial="normal"
          transition={lineTransition}
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d="M7 14H9"
          variants={lineVariants}
          animate={animate}
          initial="normal"
          transition={lineTransition}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    )
  }
)

ScheduleAnimated.displayName = "ScheduleAnimated"

export default ScheduleAnimated
