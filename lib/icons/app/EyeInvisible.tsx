import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEyeInvisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.125 7.08a.65.65 0 0 1 .868.302c1.193 2.464 3.76 4.633 7.007 4.633 3.248 0 5.814-2.17 7.007-4.633a.65.65 0 0 1 1.17.566 10 10 0 0 1-1.78 2.549l2.062 2.059a.65.65 0 1 1-.918.92l-2.105-2.102a9 9 0 0 1-2.74 1.502l1.089 3.253a.65.65 0 1 1-1.233.412l-1.11-3.319-.01-.028a8.5 8.5 0 0 1-2.802.01l-.005.018-1.11 3.32a.65.65 0 0 1-1.234-.413l1.082-3.233a9 9 0 0 1-2.799-1.522L4.46 13.476a.65.65 0 1 1-.918-.92l2.062-2.059a10 10 0 0 1-1.78-2.549.65.65 0 0 1 .302-.868" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgEyeInvisible);
export default ForwardRef;