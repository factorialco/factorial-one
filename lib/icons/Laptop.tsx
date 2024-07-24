import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLaptop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a2 2 0 0 1 2 2 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4 2 2 0 0 1 2-2zm2 7h3.5a1.5 1.5 0 0 1 1.415 1h2.17a1.5 1.5 0 0 1 1.415-1H18V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3.085 2H4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-5.085a1.5 1.5 0 0 1-1.415 1h-3a1.5 1.5 0 0 1-1.415-1" /></svg>;
const ForwardRef = forwardRef(SvgLaptop);
export default ForwardRef;