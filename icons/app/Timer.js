import * as React from "react";
import { forwardRef } from "react";
const SvgTimer = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("circle", { cx: 12, cy: 13, r: 7.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 10.3301V12.9967L15 14.6634", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5.5V3", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 3H14", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.0901 6L20.5043 7.41421", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.90991 6L3.4957 7.41421", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;