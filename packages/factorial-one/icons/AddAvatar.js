import * as React from "react";
import { forwardRef } from "react";
const SvgAddAvatar = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 32 32", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M16 4C9.373 4 4 9.373 4 16c0 5.883 4.233 10.776 9.82 11.802a1 1 0 0 0 .36-1.967 10 10 0 0 1-2.186-.67 5.7 5.7 0 0 1 2.094-.954 1 1 0 1 0-.467-1.945c-1.518.364-2.647 1.06-3.474 1.843A9.99 9.99 0 0 1 6 16c0-5.523 4.477-10 10-10 4.9 0 8.98 3.527 9.835 8.18a1 1 0 1 0 1.967-.36C26.776 8.232 21.883 4 16 4" }),
    React.createElement("path", { fill: "currentColor", d: "M11.5 14.5a4.5 4.5 0 1 1 9 0 1 1 0 1 0 2 0A6.5 6.5 0 1 0 16 21a1 1 0 1 0 0-2 4.5 4.5 0 0 1-4.5-4.5M24 21a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1" }),
    React.createElement("path", { fill: "currentColor", d: "M24 17a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0" }));
const ForwardRef = forwardRef(SvgAddAvatar);
export default ForwardRef;
