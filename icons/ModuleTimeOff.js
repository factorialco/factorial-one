import * as React from "react";
import { forwardRef } from "react";
const SvgModuleTimeOff = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleTimeOff_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M8.907 3.573c-1.102-.007-2.253.416-2.734 1.31a.89.89 0 0 0 .089.974l1.043 1.305C4.51 7.693 3.036 9.572 3 11.328c-.01.517.41.906.888.906h1.418a4.7 4.7 0 0 0-.244 3.477.888.888 0 0 0 1.244.524l3.222-1.61-.343 4.116H7.921a.843.843 0 0 0 0 1.686h8.158a.843.843 0 0 0 0-1.686h-1.264l-.343-4.117 3.222 1.611a.888.888 0 0 0 1.244-.524 4.7 4.7 0 0 0-.244-3.477h1.418a.89.89 0 0 0 .888-.906c-.036-1.757-1.51-3.635-4.305-4.166l1.043-1.305a.89.89 0 0 0 .09-.974c-.482-.894-1.633-1.317-2.735-1.31-.98.007-2.08.338-3.093 1.123-1.013-.785-2.112-1.116-3.093-1.123m3.8 10.169L12 13.388l-.707.354-.417 5h2.248z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleTimeOff_svg__a", width: 23.811, height: 22.665, x: 0.095, y: 2.12, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.453 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.453 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_5_100" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_5_100", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleTimeOff);
export default ForwardRef;
