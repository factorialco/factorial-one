import * as React from "react";
import { forwardRef } from "react";
const SvgModuleTrainings = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 25", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleTrainings_svg__a)" },
        React.createElement("path", { fill: "#fff", d: "M12 6.83C10.748 6.076 9.515 5.3 8.277 5.3c-1.414 0-2.715.547-3.943 1.53A.89.89 0 0 0 4 7.524v8.373c0 .765.464 1.328.998 1.615.524.282 1.198.35 1.81.094 1.354-.569 2.815-.38 4.698.88.299.199.689.199.988 0 1.883-1.26 3.344-1.449 4.699-.88.61.256 1.285.188 1.81-.094.533-.287.997-.85.997-1.615V7.524a.89.89 0 0 0-.334-.694c-1.228-.983-2.529-1.53-3.943-1.53-1.239 0-2.471.776-3.723 1.53" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleTrainings_svg__a", width: 23.758, height: 21.093, x: 0.121, y: 3.361, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.939 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.939 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_1_4" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_1_4", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleTrainings);
export default ForwardRef;
