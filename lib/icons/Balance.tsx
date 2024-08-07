import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBalance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M7.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M4.02 12.443a1 1 0 0 1 1.067-.927l13.966.976a1 1 0 1 1-.14 1.995L13 14.074V18h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-4q0-.033.002-.066l-6.055-.423a1 1 0 0 1-.928-1.068" /></svg>;
const ForwardRef = forwardRef(SvgBalance);
export default ForwardRef;