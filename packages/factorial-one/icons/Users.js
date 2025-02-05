import * as React from "react";
import { forwardRef } from "react";
const SvgUsers = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" }),
    React.createElement("path", { fill: "currentColor", d: "M4 8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6c0 .646.307 1.221.782 1.587.428-1.018 1.303-1.802 2.363-2.229a3 3 0 1 1 3.71 0c1.06.427 1.935 1.211 2.363 2.229.475-.366.782-.94.782-1.587V8a2 2 0 0 0-2-2zm5.155 10c-.41-.567-1.165-1-2.155-1s-1.746.433-2.155 1zM11 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2" }));
const ForwardRef = forwardRef(SvgUsers);
export default ForwardRef;
