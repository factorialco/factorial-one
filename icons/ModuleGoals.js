import * as React from "react";
import { forwardRef } from "react";
const SvgModuleGoals = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleGoals_svg__a)" },
        React.createElement("path", { fill: "#fff", d: "M5.9 3a.9.9 0 0 1 .9.9v.357c.655-.202 1.537-.357 2.7-.357 1.62 0 2.48.571 3.2 1.051l.003.002c.628.42 1.12.747 2.197.747 1.249 0 2.033-.208 2.478-.386.223-.089.365-.172.44-.222l.066-.048A.9.9 0 0 1 19.4 5.7v7.984c0 .027.004.172-.041.33a1.1 1.1 0 0 1-.403.577l-.005.003c-.46.347-1.658 1.006-4.051 1.006-1.62 0-2.48-.571-3.2-1.051l-.003-.002c-.628-.42-1.12-.747-2.197-.747-1.249 0-2.034.208-2.478.386q-.129.051-.222.098V20.1a.9.9 0 1 1-1.8 0V3.9a.9.9 0 0 1 .9-.9" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleGoals_svg__a", width: 18.584, height: 22.184, x: 2.908, y: 1.954, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.046 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.046 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_6_116" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_6_116", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleGoals);
export default ForwardRef;
