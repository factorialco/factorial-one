import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.656 7.302C3.544 6.004 4.466 4 6.174 4h11.652c1.709 0 2.63 2.004 1.518 3.302L15 12.37v4.13a2 2 0 0 1-.8 1.6l-2 1.5c-1.318.989-3.2.048-3.2-1.6v-5.63zM17.826 6H6.174l4.345 5.068A2 2 0 0 1 11 12.37V18l2-1.5v-4.13a2 2 0 0 1 .482-1.302z" /></svg>;
const ForwardRef = forwardRef(SvgFilter);
export default ForwardRef;