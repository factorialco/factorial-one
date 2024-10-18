import * as React from "react";
import { forwardRef } from "react";
const SvgPlayFilled = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M6 18.503V5.497C6 3.95 7.68 2.989 9.014 3.773l11.055 6.503c1.315.773 1.315 2.675 0 3.448L9.014 20.227C7.681 21.011 6 20.05 6 18.503" }));
const ForwardRef = forwardRef(SvgPlayFilled);
export default ForwardRef;
