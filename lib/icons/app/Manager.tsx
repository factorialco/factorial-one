import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgManager = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={9} cy={9} r={4} stroke="currentColor" vectorEffect="non-scaling-stroke" /><path stroke="currentColor" strokeLinecap="round" d="M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7" vectorEffect="non-scaling-stroke" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 18C4 18 5.5 16 9 16C12.5 16 14 18 14 18" vectorEffect="non-scaling-stroke" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 16C19 16 19.75 17 19.75 17" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgManager);
export default ForwardRef;