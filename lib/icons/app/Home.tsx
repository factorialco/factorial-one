import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.3} d="m6.256 7.603 4-2.857a3 3 0 0 1 3.488 0l4 2.857A3 3 0 0 1 19 10.043V16a3 3 0 0 1-3 3h-1a1 1 0 0 1-1-1v-2.5a2 2 0 1 0-4 0V18a1 1 0 0 1-1 1H8a3 3 0 0 1-3-3v-5.956a3 3 0 0 1 1.256-2.441Z" /></svg>;
const ForwardRef = forwardRef(SvgHome);
export default ForwardRef;