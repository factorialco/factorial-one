import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTextSize = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2h-4v11a1 1 0 1 1-2 0V7H4a1 1 0 0 1-1-1m9 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-2v5a1 1 0 1 1-2 0v-5h-2a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgTextSize);
export default ForwardRef;