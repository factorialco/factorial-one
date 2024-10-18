import * as React from "react";
import { forwardRef } from "react";
const SvgModuleTimeTracking = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleTimeTracking_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M8.85 2.05a.9.9 0 1 0 0 1.8h2.25v.95a8.101 8.101 0 1 0 1.8 0v-.95h2.25a.9.9 0 1 0 0-1.8zM6.336 5.836a.9.9 0 0 0-1.272-1.272l-1.8 1.8a.9.9 0 0 0 1.272 1.272zm12.6-1.272a.9.9 0 0 0-1.272 1.272l1.8 1.8a.9.9 0 0 0 1.272-1.272zM12.9 9.7a.9.9 0 0 0-1.8 0v2.628a1.8 1.8 0 0 0 .907 1.563l2.697 1.54a.9.9 0 1 0 .893-1.562L12.9 12.328z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleTimeTracking_svg__a", width: 21.765, height: 22.666, x: 1.117, y: 1.109, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 0.941 }),
            React.createElement("feGaussianBlur", { stdDeviation: 0.941 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_115" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_115", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleTimeTracking);
export default ForwardRef;
