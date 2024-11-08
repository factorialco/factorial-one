import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 6L19 12L13 18" vectorEffect="non-scaling-stroke" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 12H18.5" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;