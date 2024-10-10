import * as React from "react";
import { forwardRef } from "react";
const SvgModuleDocuments = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleDocuments_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M5.7 3.85A2.7 2.7 0 0 0 3 6.55v9a3.6 3.6 0 0 0 3.6 3.6h10.8a3.6 3.6 0 0 0 3.6-3.6v-5.4a3.6 3.6 0 0 0-3.6-3.6h-4.243a.257.257 0 0 1-.257-.257 2.443 2.443 0 0 0-2.443-2.443z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleDocuments_svg__a", width: 21.765, height: 19.065, x: 1.117, y: 2.909, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 0.941 }),
            React.createElement("feGaussianBlur", { stdDeviation: 0.941 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_243" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_243", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleDocuments);
export default ForwardRef;
