import * as React from "react";
import { forwardRef } from "react";
const SvgMobile = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }),
    React.createElement("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" }));
const ForwardRef = forwardRef(SvgMobile);
export default ForwardRef;
