import * as React from "react";
import { forwardRef } from "react";
const SvgQuestion = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 9C9 7 10.5 6 12 6C13.5 6 15 7.5 15 9C15 12 12 11.5 12 14", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17V17.1", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;