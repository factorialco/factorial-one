import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.44 4.154a8 8 0 1 1-4.097 13.503 1 1 0 1 1 1.414-1.414A6 6 0 1 0 6.343 10H7a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2A1 1 0 0 1 3 10h1.254a8 8 0 0 1 6.185-5.846" /><path fill="currentColor" d="M12 8a1 1 0 0 1 1 1v2.42l2.996 1.712a1 1 0 1 1-.992 1.736l-3.5-2A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgHistory);
export default ForwardRef;