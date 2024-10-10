import * as React from "react";
import { forwardRef } from "react";
const SvgInfoCircleLine = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 11a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1" }),
    React.createElement("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }));
const ForwardRef = forwardRef(SvgInfoCircleLine);
export default ForwardRef;
