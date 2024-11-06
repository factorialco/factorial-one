import { motion, Transition, useAnimation, Variants } from "framer-motion"

const checkTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2,
}

const checkVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 },
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
  },
}

const circleTransition: Transition = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const circleVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.9, 1],
  },
}

const CheckCircleAnimatedIcon = () => {
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
        <motion.circle
          cx="12"
          cy="12"
          r="8"
          initial="normal"
          variants={circleVariants}
          transition={circleTransition}
          animate={controls}
          vector-effect="non-scaling-stroke"
        />
        <motion.path
          d="M9.00003 12L11.4 14.4L15 9.6"
          initial="normal"
          variants={checkVariants}
          transition={checkTransition}
          animate={controls}
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export default CheckCircleAnimatedIcon
