import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgReaction = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 6a6 6 0 1 0 6 6 1 1 0 1 1 2 0 8 8 0 1 1-8-8 1 1 0 1 1 0 2" /><path fill="currentColor" d="M10 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1M8.72 13.375a1 1 0 0 1 1.405-.156 3 3 0 0 0 3.75 0 1 1 0 1 1 1.25 1.562 5 5 0 0 1-6.25 0 1 1 0 0 1-.156-1.406M18 2.5a1 1 0 0 1 1 1V5h1.5a1 1 0 1 1 0 2H19v1.5a1 1 0 1 1-2 0V7h-1.5a1 1 0 1 1 0-2H17V3.5a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgReaction);
export default ForwardRef;