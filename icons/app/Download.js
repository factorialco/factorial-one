import * as React from "react";
import { forwardRef } from "react";
const SvgDownload = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5V14M12 14L9 11M12 14L15 11", vectorEffect: "non-scaling-stroke" }));
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;
