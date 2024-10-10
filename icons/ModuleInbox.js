import * as React from "react";
import { forwardRef } from "react";
const SvgModuleInbox = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 26 25", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleInbox_svg__a)" },
        React.createElement("path", { fill: "#fff", d: "M6.004 6.749A4 4 0 0 1 9.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 22 10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM9.31 7a2 2 0 0 0-1.653.874L6.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 18.02 9h.868L17.85 7.733A2 2 0 0 0 16.303 7z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleInbox_svg__a", width: 25.758, height: 21.758, x: 0.121, y: 3.061, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.939 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.939 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_4_216" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_4_216", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleInbox);
export default ForwardRef;
