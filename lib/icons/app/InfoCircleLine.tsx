import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInfoCircleLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M12 12v3" /><circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.3} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M12 9v.1" /></svg>;
const ForwardRef = forwardRef(SvgInfoCircleLine);
export default ForwardRef;