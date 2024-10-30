import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.154 5.83c.684-1.64 3.008-1.64 3.692 0l1.21 2.904 2.73-.993c1.546-.562 3.072.878 2.6 2.454l-2 6.667A3 3 0 0 1 15.511 19H8.488a3 3 0 0 1-2.873-2.138l-2-6.667C3.142 8.62 4.668 7.18 6.214 7.741l2.73.993zm3.056 3.673L12 6.6l-1.21 2.903a2 2 0 0 1-2.53 1.11L5.53 9.62l2 6.667a1 1 0 0 0 .958.713h7.024a1 1 0 0 0 .958-.713l2-6.667-2.73.993a2 2 0 0 1-2.53-1.11" /></svg>;
const ForwardRef = forwardRef(SvgCrown);
export default ForwardRef;