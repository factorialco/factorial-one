import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInputField = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v10h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2V7H9a1 1 0 0 1-1-1" /><path fill="currentColor" d="M3 11a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3zM21 13a3 3 0 0 1-3 3h-2a1 1 0 1 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 1 1 0-2h2a3 3 0 0 1 3 3z" /></svg>;
const ForwardRef = forwardRef(SvgInputField);
export default ForwardRef;