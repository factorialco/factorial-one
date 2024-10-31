import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChevronUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.707 14.707a1 1 0 0 0 0-1.414L13.414 8a2 2 0 0 0-2.828 0l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 9.414l5.293 5.293a1 1 0 0 0 1.414 0" /></svg>;
const ForwardRef = forwardRef(SvgChevronUp);
export default ForwardRef;