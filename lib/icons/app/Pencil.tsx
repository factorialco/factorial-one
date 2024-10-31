import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="m7 13-1.5 5.5L11 17m-4-4 7.5-7.5a2.83 2.83 0 0 1 4 0v0a2.83 2.83 0 0 1 0 4L11 17m-4-4 4 4" /></svg>;
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;