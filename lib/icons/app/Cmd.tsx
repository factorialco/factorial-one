import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCmd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={1.3} d="M18.65 6.838c0 1.208-.98 2.187-2.188 2.187h-2.187V6.838a2.188 2.188 0 0 1 4.375 0ZM9.025 16.463a2.188 2.188 0 1 1-2.188-2.188h2.188zM18.65 16.463a2.188 2.188 0 0 1-4.375 0v-2.188h2.187c1.209 0 2.188.98 2.188 2.187ZM9.025 6.838v2.187H6.837a2.188 2.188 0 1 1 2.188-2.187ZM14.275 9.025h-5.25v5.25h5.25z" /></svg>;
const ForwardRef = forwardRef(SvgCmd);
export default ForwardRef;