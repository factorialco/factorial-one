import { motion } from "framer-motion";
import * as React from "react";
const checkTransition = {
    duration: 0.5,
    ease: [0, 0, 0.2, 1],
    delay: 0.2,
};
const checkVariants = {
    normal: {
        pathLength: 1,
        opacity: 1,
        transition: { delay: 0 },
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
    },
};
const circleTransition = {
    duration: 0.5,
    ease: [0.175, 0.885, 0.32, 1.275],
};
const circleVariants = {
    normal: {
        scale: 1,
    },
    animate: {
        scale: [1, 0.9, 1],
    },
};
const CheckCircleAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (React.createElement("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement(motion.circle, { cx: "12", cy: "12", r: "8", initial: "normal", variants: circleVariants, transition: circleTransition, animate: animate, vectorEffect: "non-scaling-stroke" }),
        React.createElement(motion.path, { d: "M9.00003 12L11.4 14.4L15 9.6", initial: "normal", variants: checkVariants, transition: checkTransition, animate: animate, vectorEffect: "non-scaling-stroke" })));
});
CheckCircleAnimated.displayName = "CheckCircleAnimated";
export default CheckCircleAnimated;