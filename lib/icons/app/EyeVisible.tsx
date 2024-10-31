import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEyeVisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.3} d="M20 12c-1-3-4-6-8-6s-7 3-8 6c1 3 4 6 8 6s7-3 8-6Z" /><circle cx={12} cy={12} r={2.35} stroke="currentColor" strokeWidth={1.3} /></svg>;
const ForwardRef = forwardRef(SvgEyeVisible);
export default ForwardRef;