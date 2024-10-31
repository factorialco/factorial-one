import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="M4 6v9a3 3 0 0 0 3 3h13" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="m4 13 4.5-4 3.5 1 4.5-4L20 9M5.5 17 9 13.5l3.5 2 4-3.5 3.5 2.5" /></svg>;
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;