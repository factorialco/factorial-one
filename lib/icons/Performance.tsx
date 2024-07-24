import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPerformance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 5a1 1 0 0 1 1 1v9a2 2 0 0 0 2 2h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1" /><path fill="currentColor" d="M17 9a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.586l-2.94 2.94a1.5 1.5 0 0 1-2.12 0L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l3.646-3.647a1.5 1.5 0 0 1 2.122 0L15 11.586 17.586 9z" /></svg>;
const ForwardRef = forwardRef(SvgPerformance);
export default ForwardRef;