import * as React from "react";
import { forwardRef } from "react";
const SvgAppearance = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-6a6 6 0 1 0 0 12z" }));
const ForwardRef = forwardRef(SvgAppearance);
export default ForwardRef;
