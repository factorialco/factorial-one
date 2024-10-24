import * as React from "react";
import { forwardRef } from "react";
const SvgList = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M8 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 16a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M5 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }));
const ForwardRef = forwardRef(SvgList);
export default ForwardRef;
