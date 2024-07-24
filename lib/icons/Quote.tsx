import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgQuote = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 11a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 0 0-4 4v1h1.5A3.5 3.5 0 1 1 4 15.5zm5 4.5A1.5 1.5 0 0 0 7.5 14H6v1.5a1.5 1.5 0 0 0 3 0M13 11a6 6 0 0 1 6-6 1 1 0 1 1 0 2 4 4 0 0 0-4 4v1h1.5a3.5 3.5 0 1 1-3.5 3.5zm5 4.5a1.5 1.5 0 0 0-1.5-1.5H15v1.5a1.5 1.5 0 0 0 3 0" /></svg>;
const ForwardRef = forwardRef(SvgQuote);
export default ForwardRef;