import { motion, Transition, useAnimation, Variants } from "framer-motion"

const handTransition: Transition = {
  duration: 0.7,
  ease: [1, -0.4, 0.35, 0.95],
}

const handVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    rotate: 360,
  },
}

const handMinuteTransition: Transition = {
  duration: 0.6,
  ease: [1, -0.4, 0.35, 0.95],
}

const handMinuteVariants: Variants = {
  normal: {
    rotate: 135,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    rotate: 495,
  },
}

const ClockAnimatedIcon = () => {
  const controls = useAnimation()
  return (
    <div
      className="h-6 w-6 select-none"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="1.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="9"
          variants={handVariants}
          animate={controls}
          initial="normal"
          transition={handTransition}
          vector-effect="non-scaling-stroke"
        />
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="8"
          variants={handMinuteVariants}
          animate={controls}
          initial="normal"
          transition={handMinuteTransition}
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export default ClockAnimatedIcon
