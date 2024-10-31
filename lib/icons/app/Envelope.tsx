import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEnvelope = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={16} height={12} x={4} y={6} stroke="currentColor" strokeWidth={1.3} rx={3} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="m4.5 9.5 6.654 3.105a2 2 0 0 0 1.692 0L19.5 9.5" /></svg>;
const ForwardRef = forwardRef(SvgEnvelope);
export default ForwardRef;