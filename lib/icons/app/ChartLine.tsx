import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 5.35a.65.65 0 0 1 .65.65v5.553l3.418-3.039a.65.65 0 0 1 .61-.139l3.157.902 4.233-3.763a.65.65 0 0 1 .855-.008l3.5 3a.65.65 0 1 1-.846.988l-3.07-2.631-4.075 3.623a.65.65 0 0 1-.61.139l-3.157-.902-4.015 3.569V15c0 .542.184 1.041.492 1.439L8.54 13.04a.65.65 0 0 1 .783-.104l3.098 1.77 3.651-3.195a.65.65 0 0 1 .806-.04l3.5 2.5a.65.65 0 1 1-.756 1.058l-3.081-2.201-3.613 3.161a.65.65 0 0 1-.75.075l-3.07-1.753-2.901 2.902c.247.089.515.137.793.137h13a.65.65 0 1 1 0 1.3H7A3.65 3.65 0 0 1 3.35 15V6A.65.65 0 0 1 4 5.35" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;