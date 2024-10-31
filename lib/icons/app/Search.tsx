import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="m16 16 3 3" /><rect width={14} height={14} x={4} y={4} stroke="currentColor" strokeWidth={1.3} rx={7} /></svg>;
const ForwardRef = forwardRef(SvgSearch);
export default ForwardRef;