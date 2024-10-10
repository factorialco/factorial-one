import * as React from "react";
import { forwardRef } from "react";
const SvgShare = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" }),
    React.createElement("path", { fill: "currentColor", d: "M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 8H15a2 2 0 0 0-2 2v1.5a1 1 0 1 1-2 0V10a4 4 0 0 1 4-4h2.586l-1.293-1.293a1 1 0 0 1 0-1.414" }));
const ForwardRef = forwardRef(SvgShare);
export default ForwardRef;
