import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.3} d="M4 13c3.314 0 6-3.134 6-7 0 3.866 2.686 7 6 7-3.314 0-6 3.134-6 7 0-3.866-2.686-7-6-7Z" /><path fill="currentColor" d="M17.5 3.35a.65.65 0 0 1 .65.65A1.85 1.85 0 0 0 20 5.85a.65.65 0 1 1 0 1.3A1.85 1.85 0 0 0 18.15 9a.65.65 0 1 1-1.3 0A1.85 1.85 0 0 0 15 7.15a.65.65 0 1 1 0-1.3A1.85 1.85 0 0 0 16.85 4a.65.65 0 0 1 .65-.65" /></svg>;
const ForwardRef = forwardRef(SvgAi);
export default ForwardRef;