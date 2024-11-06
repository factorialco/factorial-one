import { motion, Transition, useAnimation, Variants } from "framer-motion"

const headTransition: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
}

const headVariants: Variants = {
  normal: {
    skew: 0,
    originX: "50%",
    originY: "60%",
  },
  animate: {
    rotate: [0, -28, 28, 0],
  },
}

const PersonAnimatedIcon = () => {
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
        <motion.circle
          cx="12"
          cy="9"
          r="4"
          initial="normal"
          variants={headVariants}
          transition={headTransition}
          animate={controls}
        />
        <path d="M7 18C7 18 8.5 16 12 16C15.5 16 17 18 17 18" />
      </svg>
    </div>
  )
}

export default PersonAnimatedIcon
