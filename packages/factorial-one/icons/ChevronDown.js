import * as React from "react";
import { forwardRef } from "react";
const SvgChevronDown = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M18.707 9.293a1 1 0 0 1 0 1.414L13.414 16a2 2 0 0 1-2.828 0l-5.293-5.293a1 1 0 0 1 1.414-1.414L12 14.586l5.293-5.293a1 1 0 0 1 1.414 0" }));
const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;
