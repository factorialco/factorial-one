import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPlaceholder = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.3} /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={1.3} d="m17.5 6.5-11 11M17.5 17.5l-11-11" /></svg>;
const ForwardRef = forwardRef(SvgPlaceholder);
export default ForwardRef;