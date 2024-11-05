import { motion, Transition, useAnimation, Variants } from "framer-motion"

const graphTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2,
}

const graphVariants: Variants = {
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

const arrowTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.4,
}

const arrowVariants: Variants = {
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

const axisTransition: Transition = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const axisVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.9, 1],
  },
}

const GraphAnimatedIcon = () => {
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
        stroke="currentColor"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <motion.path
          d="M4 6V15C4 16.6569 5.34315 18 7 18H20"
          variants={axisVariants}
          transition={axisTransition}
          animate={controls}
          vector-effect="non-scaling-stroke"
        />
        <motion.path
          d="M8 14L12 10L15 13L20 8"
          variants={graphVariants}
          transition={graphTransition}
          animate={controls}
          vector-effect="non-scaling-stroke"
        />
        <motion.path
          d="M17 8H20V11"
          variants={arrowVariants}
          transition={arrowTransition}
          animate={controls}
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export default GraphAnimatedIcon
