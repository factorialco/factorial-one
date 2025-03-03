import { motion, Transition, Variants } from "framer-motion"
import * as React from "react"

const bigStarTransition: Transition = {
  duration: 1,
  ease: [0.42, 0, 0.58, 1],
}

const bigStarVariants: Variants = {
  normal: {
    rotate: 0,
    scale: 1,
    originX: "37.5%",
    originY: "62.5%",
    transition: { duration: 0 },
  },
  animate: {
    rotate: [0, 180],
    scale: [1, 0.4, 1.3, 1],
    transition: bigStarTransition,
  },
}

const smallFirstStarTransition: Transition = {
  duration: 1,
  ease: [0.645, 0.045, 0.355, 1],
}

const smallFirstStarVariants: Variants = {
  normal: {
    rotate: 0,
    scale: 1,
    opacity: 0.5,
    transition: { duration: 0 },
  },
  animate: {
    rotate: [0, -270],
    scale: [1, 0, 0, 0, 1.3, 1],
    transition: smallFirstStarTransition,
  },
}

const smallSecondStarTransition: Transition = {
  duration: 0.6,
  ease: [0.645, 0.045, 0.355, 1],
  delay: 0.2,
}

const smallSecondStarVariants: Variants = {
  normal: {
    rotate: 0,
    scale: 0,
    opacity: 0.5,
    x: -1,
    y: -1,
    transition: { duration: 0 },
  },
  animate: {
    rotate: [0, -90],
    scale: [0, 0.7, 1, 0],
    transition: smallSecondStarTransition,
  },
}

const smallThirdStarTransition: Transition = {
  duration: 0.6,
  ease: [0.645, 0.045, 0.355, 1],
  delay: 0.4,
}

const smallThirdStarVariants: Variants = {
  normal: {
    rotate: 0,
    scale: 0,
    opacity: 0.5,
    x: 1.5,
    y: 2,
    transition: { duration: 0 },
  },
  animate: {
    rotate: [0, -90],
    scale: [0, 0.7, 1, 0],
    transition: smallThirdStarTransition,
  },
}

interface AIIconProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const AIIcon = React.forwardRef<SVGSVGElement, AIIconProps>(
  ({ animate = "normal", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <motion.path
          d="M19.2343 1.8948L19.0022 1.26745C18.8411 0.832117 18.2254 0.832117 18.0643 1.26745L17.8322 1.8948C17.3395 3.22501 16.2916 4.27293 14.9613 4.76573L14.3339 4.99784C13.8986 5.1589 13.8986 5.77464 14.3339 5.9357L14.9613 6.16781C16.2915 6.66053 17.3394 7.70842 17.8322 9.03874L18.0643 9.66608C18.2254 10.1014 18.8411 10.1014 19.0022 9.66608L19.2343 9.03874C19.727 7.70853 20.7749 6.66061 22.1052 6.16781L22.7326 5.9357C23.1679 5.77464 23.1679 5.1589 22.7326 4.99783L22.1052 4.76573C20.775 4.27301 19.7271 3.22512 19.2343 1.8948Z"
          fill="#6143A7"
          fill-opacity="0.5"
          initial="normal"
          variants={smallFirstStarVariants}
          transition={smallFirstStarTransition}
          animate={animate}
        />
        <motion.path
          d="M6.16781 1.8948L5.9357 1.26745C5.77464 0.832117 5.1589 0.832117 4.99784 1.26745L4.76573 1.8948C4.27301 3.22501 3.22512 4.27293 1.8948 4.76573L1.26745 4.99784C0.832116 5.1589 0.832116 5.77464 1.26745 5.9357L1.8948 6.16781C3.22501 6.66053 4.27293 7.70842 4.76573 9.03874L4.99784 9.66608C5.1589 10.1014 5.77464 10.1014 5.9357 9.66608L6.16781 9.03874C6.66053 7.70853 7.70842 6.66061 9.03874 6.16781L9.66608 5.9357C10.1014 5.77464 10.1014 5.1589 9.66608 4.99783L9.03874 4.76573C7.70853 4.27301 6.66061 3.22512 6.16781 1.8948Z"
          fill="#6143A7"
          fill-opacity="0.5"
          initial="normal"
          variants={smallSecondStarVariants}
          transition={smallSecondStarTransition}
          animate={animate}
        />
        <motion.path
          d="M19.1678 14.8948L18.9357 14.2675C18.7746 13.8321 18.1589 13.8321 17.9978 14.2675L17.7657 14.8948C17.273 16.225 16.2251 17.2729 14.8948 17.7657L14.2675 17.9978C13.8321 18.1589 13.8321 18.7746 14.2675 18.9357L14.8948 19.1678C16.225 19.6605 17.2729 20.7084 17.7657 22.0387L17.9978 22.6661C18.1589 23.1014 18.7746 23.1014 18.9357 22.6661L19.1678 22.0387C19.6605 20.7085 20.7084 19.6606 22.0387 19.1678L22.6661 18.9357C23.1014 18.7746 23.1014 18.1589 22.6661 17.9978L22.0387 17.7657C20.7085 17.273 19.6606 16.2251 19.1678 14.8948Z"
          fill="#6143A7"
          fill-opacity="0.5"
          initial="normal"
          variants={smallThirdStarVariants}
          transition={smallThirdStarTransition}
          animate={animate}
        />
        <motion.path
          id="star_big"
          d="M10.3802 8.78863L9.66885 6.86693C9.50774 6.43168 8.89213 6.43168 8.73103 6.86693L8.01973 8.78863C7.19159 11.0272 5.42701 12.7918 3.18853 13.6198L1.26683 14.3311C0.831583 14.4922 0.831584 15.1078 1.26683 15.2689L3.18853 15.9802C5.42706 16.8084 7.19173 18.573 8.01973 20.8114L8.73103 22.7331C8.89213 23.1684 9.50774 23.1684 9.66885 22.7331L10.3802 20.8114C11.2083 18.5729 12.9729 16.8082 15.2113 15.9802L17.133 15.2689C17.5683 15.1078 17.5683 14.4922 17.133 14.3311L15.2113 13.6198C12.9728 12.7917 11.2082 11.0271 10.3802 8.78863Z"
          fill="#6143A7"
          fill-opacity="0.8"
          initial="normal"
          variants={bigStarVariants}
          transition={bigStarTransition}
          animate={animate}
        />
      </svg>
    )
  }
)

export { AIIcon }
