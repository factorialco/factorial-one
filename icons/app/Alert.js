import * as React from "react";
import { forwardRef } from "react";
const SvgAlert = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V6.99997", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17.1V17", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;
