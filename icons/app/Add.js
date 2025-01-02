import * as React from "react";
import { forwardRef } from "react";
const SvgAdd = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5V12V19", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12H5H19", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgAdd);
export default ForwardRef;
