import * as React from "react";
import { forwardRef } from "react";
const SvgModuleReports = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleReports_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M10 5a2 2 0 1 1 4 0v14a2 2 0 1 1-4 0zM4 15a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0zm14-6a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0v-8a2 2 0 0 0-2-2", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleReports_svg__a", width: 20.184, height: 22.184, x: 1.908, y: 1.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.046 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.046 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_239" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_239", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleReports);
export default ForwardRef;
