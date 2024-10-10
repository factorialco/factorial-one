import * as React from "react";
import { forwardRef } from "react";
const SvgModuleSpending = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { fill: "#fff", fillRule: "evenodd", clipRule: "evenodd", filter: "url(#ModuleSpending_svg__a)" },
        React.createElement("path", { d: "M4 7.556a2.667 2.667 0 0 1 2.667-2.667h8a2.667 2.667 0 0 1 2.666 2.667v1.777c0 .491-.398.89-.889.89H6.667A2.667 2.667 0 0 1 4 7.555m2.667-.89a.889.889 0 1 0 0 1.779h8.888v-.89a.89.89 0 0 0-.889-.888z" }),
        React.createElement("path", { d: "M5.778 7.556H4v8a3.556 3.556 0 0 0 3.556 3.555h8.889A3.555 3.555 0 0 0 20 15.555V12a3.556 3.556 0 0 0-3.556-3.555H5.778zM16 15.11a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleSpending_svg__a", width: 20.508, height: 18.73, x: 1.746, y: 3.762, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.127 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.127 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_114" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_114", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleSpending);
export default ForwardRef;
