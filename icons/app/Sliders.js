import * as React from "react";
import { forwardRef } from "react";
const SvgSliders = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6 13V21", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 13V21", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 3V11", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6 3L6 4", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 3L18 4", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 20L12 21", vectorEffect: "non-scaling-stroke" }),
    React.createElement("rect", { width: 6, height: 3, x: 3, y: 7, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }),
    React.createElement("rect", { width: 6, height: 3, x: 9, y: 14, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }),
    React.createElement("rect", { width: 6, height: 3, x: 15, y: 7, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgSliders);
export default ForwardRef;