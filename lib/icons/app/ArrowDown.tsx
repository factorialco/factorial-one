import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M5.293 12.293a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0-1.414-1.414L13 16.586V5a1 1 0 1 0-2 0v11.586l-4.293-4.293a1 1 0 0 0-1.414 0" /></svg>;
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;