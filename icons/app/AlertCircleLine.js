import * as React from "react";
import { forwardRef } from "react";
const SvgAlertCircleLine = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 15.1V15", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgAlertCircleLine);
export default ForwardRef;
