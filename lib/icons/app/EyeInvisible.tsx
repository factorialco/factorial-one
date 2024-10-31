import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEyeInvisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M19.592 7.665c-1.274 2.632-4.038 5-7.592 5s-6.318-2.368-7.592-5" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="m10.008 13.016-1.11 3.32M14.058 13.016l1.11 3.32M17.523 10.543 20 13.016M6.477 10.543 4 13.016" /></svg>;
const ForwardRef = forwardRef(SvgEyeInvisible);
export default ForwardRef;