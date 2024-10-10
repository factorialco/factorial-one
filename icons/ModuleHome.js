import * as React from "react";
import { forwardRef } from "react";
const SvgModuleHome = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 26", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleHome_svg__a)" },
        React.createElement("path", { fill: "#fff", d: "M9.675 3.932a4 4 0 0 1 4.65 0l4 2.857A4 4 0 0 1 20 10.044V16a4 4 0 0 1-4 4h-1a2 2 0 0 1-2-2v-2.5a1 1 0 1 0-2 0V18a2 2 0 0 1-2 2H8a4 4 0 0 1-4-4v-5.956a4 4 0 0 1 1.675-3.255z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleHome_svg__a", width: 23.758, height: 24.571, x: 0.121, y: 1.247, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.939 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.939 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_80_61" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_80_61", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleHome);
export default ForwardRef;
