import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCheckCircleLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /><path fill="currentColor" d="M15.1 9.2a1 1 0 0 1 .2 1.4l-3 4a1 1 0 0 1-1.507.107l-2-2a1 1 0 1 1 1.414-1.414l1.185 1.185L13.7 9.4a1 1 0 0 1 1.4-.2" /></svg>;
const ForwardRef = forwardRef(SvgCheckCircleLine);
export default ForwardRef;