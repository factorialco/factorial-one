import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLayersFront = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 4.35A3.65 3.65 0 0 0 4.35 8v6A3.65 3.65 0 0 0 8 17.65h6A3.65 3.65 0 0 0 17.65 14V8A3.65 3.65 0 0 0 14 4.35zM5.65 8A2.35 2.35 0 0 1 8 5.65h6A2.35 2.35 0 0 1 16.35 8v6A2.35 2.35 0 0 1 14 16.35H8A2.35 2.35 0 0 1 5.65 14zm15 1a.65.65 0 1 0-1.3 0v1.4c0 1.69 0 2.92-.08 3.888-.078.96-.23 1.606-.503 2.14a5.35 5.35 0 0 1-2.338 2.339c-.535.272-1.18.425-2.141.503-.968.08-2.197.08-3.888.08H9a.65.65 0 1 0 0 1.3h1.43c1.655 0 2.937 0 3.964-.084 1.04-.085 1.876-.26 2.625-.64a6.65 6.65 0 0 0 2.906-2.907c.382-.749.556-1.585.641-2.625.084-1.027.084-2.31.084-3.964V9" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgLayersFront);
export default ForwardRef;