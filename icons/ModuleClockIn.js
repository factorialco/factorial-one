import * as React from "react";
import { forwardRef } from "react";
const SvgModuleClockIn = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { clipPath: "url(#ModuleClockIn_svg__a)", filter: "url(#ModuleClockIn_svg__b)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-3a1 1 0 1 0-2 0v2.465a2 2 0 0 0 .89 1.664l2.555 1.703a1 1 0 0 0 1.11-1.664L13 11.465z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "ModuleClockIn_svg__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })),
        React.createElement("filter", { id: "ModuleClockIn_svg__b", width: 22.896, height: 22.896, x: 0.552, y: 2.276, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.724 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.724 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_101" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_101", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleClockIn);
export default ForwardRef;
