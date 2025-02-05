import * as React from "react";
import { forwardRef } from "react";
const SvgPerson = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("path", { fill: "currentColor", d: "M12 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 9a5 5 0 1 1 10 0A5 5 0 0 1 7 9M5.793 17.293a1 1 0 0 0 1.41 1.418l.007-.007.047-.043c.046-.04.12-.104.222-.183a6.6 6.6 0 0 1 .93-.596A7.6 7.6 0 0 1 12 17c1.554 0 2.768.443 3.592.882.412.22.724.438.929.596a4 4 0 0 1 .269.226l.006.006a1 1 0 0 0 1.411-1.417l-.003-.003-.003-.003-.01-.01a3 3 0 0 0-.12-.11 6 6 0 0 0-.326-.27 8.6 8.6 0 0 0-1.212-.78A9.6 9.6 0 0 0 12 15a9.6 9.6 0 0 0-4.533 1.118 8.6 8.6 0 0 0-1.212.779 6 6 0 0 0-.446.38l-.01.01-.003.003-.002.002zm11 1.415.002.001.001.002" }));
const ForwardRef = forwardRef(SvgPerson);
export default ForwardRef;
