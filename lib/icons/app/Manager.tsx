import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgManager = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={9} cy={9} r={4} stroke="currentColor" strokeWidth={1.3} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="M16 13a3 3 0 1 0 0-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M4 18s1.5-2 5-2 5 2 5 2M17 16c2 0 2.75 1 2.75 1" /></svg>;
const ForwardRef = forwardRef(SvgManager);
export default ForwardRef;