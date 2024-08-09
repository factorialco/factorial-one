import * as React from "react";
import { forwardRef } from "react";
const SvgFeedback = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M7 13a1 1 0 0 0-1 1v4.586l.293-.293A1 1 0 0 1 7 18h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H7.414l-.853.854C5.616 21.799 4 21.129 4 19.793z" }),
    React.createElement("path", { fill: "currentColor", d: "M17 6a1 1 0 0 1 1 1v4.586l-.293-.293A1 1 0 0 0 17 11h-.5a1 1 0 1 0 0 2h.086l.853.854c.945.945 2.561.275 2.561-1.061V7a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3v2a1 1 0 1 0 2 0V7a1 1 0 0 1 1-1z" }));
const ForwardRef = forwardRef(SvgFeedback);
export default ForwardRef;
