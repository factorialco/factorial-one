import * as React from "react";
import { forwardRef } from "react";
const SvgSpinner = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" }));
const ForwardRef = forwardRef(SvgSpinner);
export default ForwardRef;
