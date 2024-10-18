import * as React from "react";
import { forwardRef } from "react";
const SvgEllipsis = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4M12 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4" }));
const ForwardRef = forwardRef(SvgEllipsis);
export default ForwardRef;
