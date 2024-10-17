import * as React from "react";
import { forwardRef } from "react";
const SvgModuleProjects = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 25", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleProjects_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M9 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4zm-3 7v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-5v.75c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V13zm5-7h4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1m2 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleProjects_svg__a", width: 24.346, height: 23.346, x: 0.827, y: 1.413, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.587 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.587 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_241" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_241", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleProjects);
export default ForwardRef;
