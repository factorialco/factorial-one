import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgZoomIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" /><path fill="currentColor" d="M10 14a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V8a1 1 0 1 0-2 0v2H8a1 1 0 1 0 0 2h2z" /></svg>;
const ForwardRef = forwardRef(SvgZoomIn);
export default ForwardRef;