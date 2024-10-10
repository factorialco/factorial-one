import * as React from "react";
import { forwardRef } from "react";
const SvgModuleTasks = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleTasks_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m11.338-2.592a.8.8 0 0 1 .054 1.13l-4 4.4a.8.8 0 0 1-1.158.028l-1.6-1.6a.8.8 0 0 1 1.132-1.132l1.006 1.007 3.436-3.78a.8.8 0 0 1 1.13-.053", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleTasks_svg__a", width: 20.649, height: 20.649, x: 1.676, y: 2.838, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.162 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.162 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_99" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_99", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleTasks);
export default ForwardRef;
