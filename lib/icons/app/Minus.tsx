import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgMinus);
export default ForwardRef;