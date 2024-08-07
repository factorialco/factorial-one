import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgValidation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 3a8 8 0 1 0 4.906 14.32l2.387 2.387a1 1 0 0 0 1.414-1.414l-2.387-2.387A8 8 0 0 0 11 3m-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0" /><path fill="currentColor" d="M14.1 8.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 0 1-1.507.107l-2-2a1 1 0 1 1 1.414-1.414l1.185 1.185L12.7 8.4a1 1 0 0 1 1.4-.2" /></svg>;
const ForwardRef = forwardRef(SvgValidation);
export default ForwardRef;