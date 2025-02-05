import * as React from "react";
import { forwardRef } from "react";
const SvgChevronRight = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M9.293 5.293a1 1 0 0 1 1.414 0L16 10.586a2 2 0 0 1 0 2.828l-5.293 5.293a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414" }));
const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;
