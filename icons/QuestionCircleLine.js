import * as React from "react";
import { forwardRef } from "react";
const SvgQuestionCircleLine = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M11 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0" }),
    React.createElement("path", { fill: "currentColor", d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" }),
    React.createElement("path", { fill: "currentColor", d: "M12 9.5a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 4 2.83v.17a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1 1 1 0 1 0 0-2" }));
const ForwardRef = forwardRef(SvgQuestionCircleLine);
export default ForwardRef;
