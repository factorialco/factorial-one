import * as React from "react";
import { forwardRef } from "react";
const SvgCheck = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M18.093 7.695a1 1 0 0 1 .212 1.398l-6.31 8.564a2 2 0 0 1-3.024.228l-3.678-3.678a1 1 0 1 1 1.414-1.414l3.678 3.678 6.31-8.564a1 1 0 0 1 1.398-.212" }));
const ForwardRef = forwardRef(SvgCheck);
export default ForwardRef;
