import * as React from "react";
import { forwardRef } from "react";
const SvgClock = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V12L15.5 14", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;
