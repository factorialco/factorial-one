import * as React from "react";
import { forwardRef } from "react";
const SvgModuleCalendar = (props, ref) => React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 27", ref: ref, ...props },
    React.createElement("g", { filter: "url(#ModuleCalendar_svg__a)" },
        React.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M9.333 3.11c.491 0 .89.398.89.889v.889h3.555v-.89a.889.889 0 1 1 1.778 0v.89h.888A3.556 3.556 0 0 1 20 8.443v8.89a3.556 3.556 0 0 1-3.556 3.555H7.556A3.556 3.556 0 0 1 4 17.332V8.443a3.556 3.556 0 0 1 3.556-3.555h.888v-.89c0-.49.398-.888.89-.888m4.445 3.556v.888a.889.889 0 1 0 1.778 0v-.888h.888c.982 0 1.778.795 1.778 1.777v1.778H5.778V8.443c0-.982.796-1.777 1.778-1.777h.888v.888a.889.889 0 0 0 1.778 0v-.888z", clipRule: "evenodd" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "ModuleCalendar_svg__a", width: 22.896, height: 24.673, x: 0.552, y: 1.386, colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", { dy: 1.724 }),
            React.createElement("feGaussianBlur", { stdDeviation: 1.724 }),
            React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_4_217" }),
            React.createElement("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_4_217", result: "shape" }))));
const ForwardRef = forwardRef(SvgModuleCalendar);
export default ForwardRef;
