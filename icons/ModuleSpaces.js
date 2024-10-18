import * as React from "react";
import { forwardRef } from "react";
const SvgModuleSpaces = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleSpaces_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M10.446 3.948a3.2 3.2 0 0 1 3.108 0l4.8 2.667A3.2 3.2 0 0 1 20 9.412v5.176a3.2 3.2 0 0 1-1.646 2.797l-4.8 2.667a3.2 3.2 0 0 1-3.108 0l-4.8-2.667A3.2 3.2 0 0 1 4 14.588V9.412a3.2 3.2 0 0 1 1.646-2.797zm2.331 1.399a1.6 1.6 0 0 0-1.554 0L6.447 8 12 11.085 17.553 8zm5.622 4.013L12.8 12.47v6.17l1.6-.889v-3.236a1.6 1.6 0 0 1 .823-1.399l.388-.215a.8.8 0 0 1 1.189.699v2.818l.777-.431a1.6 1.6 0 0 0 .823-1.4V9.36", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleSpaces_svg__a", width: 20.184, height: 21.093, x: 1.908, y: 2.5, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.046 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.046 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_238" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_238", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleSpaces);
export default ForwardRef;
