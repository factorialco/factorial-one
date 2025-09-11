import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const SvgSpinner = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", d: "M19 12C19 13.3845 18.5895 14.7378 17.8203 15.889C17.0511 17.0401 15.9579 17.9373 14.6788 18.4672C13.3997 18.997 11.9922 19.1356 10.6344 18.8655C9.2765 18.5954 8.02922 17.9287 7.05025 16.9497C6.07128 15.9708 5.4046 14.7235 5.1345 13.3656C4.86441 12.0078 5.00303 10.6003 5.53284 9.32122C6.06266 8.04213 6.95986 6.94888 8.11101 6.17971C9.26215 5.41054 10.6155 5 12 5", vectorEffect: "non-scaling-stroke" }) }));
const ForwardRef = forwardRef(SvgSpinner);
export default ForwardRef;
