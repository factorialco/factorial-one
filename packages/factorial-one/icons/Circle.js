import * as React from "react";
import { forwardRef } from "react";
const SvgCircle = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 16 0 8 8 0 0 1-16 0", clipRule: "evenodd" }));
const ForwardRef = forwardRef(SvgCircle);
export default ForwardRef;
