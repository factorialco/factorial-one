import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M17 8v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V8m10 0h-1.5M17 8h1.5M7 8h1.5M7 8H5.5m10 0V5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3m7 0h-7" /></svg>;
const ForwardRef = forwardRef(SvgDelete);
export default ForwardRef;