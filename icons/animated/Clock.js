import { motion } from "framer-motion";
import * as React from "react";
const handTransition = {
    duration: 0.7,
    ease: [1, -0.4, 0.35, 0.95],
};
const handVariants = {
    normal: {
        rotate: 0,
        originX: "50%",
        originY: "50%",
    },
    animate: {
        rotate: 360,
    },
};
const handMinuteTransition = {
    duration: 0.6,
    ease: [1, -0.4, 0.35, 0.95],
};
const handMinuteVariants = {
    normal: {
        rotate: 135,
        originX: "50%",
        originY: "50%",
    },
    animate: {
        rotate: 495,
    },
};
const ClockAnimated = React.forwardRef(({ animate = "normal", ...props }, ref) => {
    return (React.createElement("svg", { ref: ref, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", strokeWidth: "1.3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", ...props },
        React.createElement("circle", { cx: "12", cy: "12", r: "8" }),
        React.createElement(motion.line, { x1: "12", y1: "12", x2: "12", y2: "9", variants: handVariants, animate: animate, initial: "normal", transition: handTransition, vectorEffect: "non-scaling-stroke" }),
        React.createElement(motion.line, { x1: "12", y1: "12", x2: "12", y2: "8", variants: handMinuteVariants, animate: animate, initial: "normal", transition: handMinuteTransition, vectorEffect: "non-scaling-stroke" })));
});
ClockAnimated.displayName = "ClockAnimated";
export default ClockAnimated;