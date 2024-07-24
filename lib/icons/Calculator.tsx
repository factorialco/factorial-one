import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM7 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm0 2h2v2H7zm0 6v-2h2v2zm0 2h2v2a2 2 0 0 1-2-2m4 0h2v2h-2zm2-2h-2v-2h2zm2 4v-6h2v4a2 2 0 0 1-2 2m0-8V9h2v2zm-4 0V9h2v2z" /></svg>;
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;