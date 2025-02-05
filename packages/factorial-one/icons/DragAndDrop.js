import * as React from "react";
import { forwardRef } from "react";
const SvgDragAndDrop = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M9 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M9 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }));
const ForwardRef = forwardRef(SvgDragAndDrop);
export default ForwardRef;
