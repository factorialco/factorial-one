import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.707 5.293a1 1 0 0 0-1.414 0L8 10.586a2 2 0 0 0 0 2.828l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 12l5.293-5.293a1 1 0 0 0 0-1.414" /></svg>;
const ForwardRef = forwardRef(SvgChevronLeft);
export default ForwardRef;