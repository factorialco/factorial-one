import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M18.707 11.707a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L11 7.414V19a1 1 0 1 0 2 0V7.414l4.293 4.293a1 1 0 0 0 1.414 0" /></svg>;
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;