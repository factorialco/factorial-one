import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgPerson = (props, ref) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: [_jsx("circle", { cx: 12, cy: 9, r: 4, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }), _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 18C7 18 8.5 16 12 16C15.5 16 17 18 17 18", vectorEffect: "non-scaling-stroke" })] }));
const ForwardRef = forwardRef(SvgPerson);
export default ForwardRef;
