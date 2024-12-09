import * as React from "react";
import { forwardRef } from "react";
const SvgInfo = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7V7.1", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgInfo);
export default ForwardRef;
