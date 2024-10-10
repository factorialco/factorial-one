import * as React from "react";
import { forwardRef } from "react";
const SvgModuleWorkflows = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleWorkflows_svg__a)" },
        React.createElement("path", { fill: "#fff", d: "M18.42 4.455a1.125 1.125 0 0 0-1.59 1.59l.329.33h-3.85A4.5 4.5 0 0 0 9.491 8.49l-.83 1.328a2.25 2.25 0 0 1-1.908 1.057H4.125a1.125 1.125 0 0 0 0 2.25h2.63c.775 0 1.496.4 1.907 1.057l.83 1.328a4.5 4.5 0 0 0 3.816 2.115h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59l-2.25-2.25a1.125 1.125 0 0 0-1.591 1.59l.329.33h-3.85a2.25 2.25 0 0 1-1.909-1.057l-.83-1.328a4.5 4.5 0 0 0-.839-.99c.322-.284.606-.616.84-.99l.83-1.328a2.25 2.25 0 0 1 1.907-1.057h3.851l-.33.33a1.125 1.125 0 0 0 1.592 1.59l2.25-2.25c.439-.439.439-1.151 0-1.59z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleWorkflows_svg__a", width: 22.707, height: 20.457, x: 0.647, y: 2.948, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.177 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.177 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_240" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_240", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleWorkflows);
export default ForwardRef;
