import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M21 10c0-1.9-1.325-3.49-3.101-3.899A4 4 0 0 0 14 3h-4C8.1 3 6.51 4.325 6.101 6.101A4 4 0 0 0 3 10v4a4 4 0 0 0 4 4 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3 4 4 0 0 0 4-4zm-5.268-4H8.268A2 2 0 0 1 10 5h4a2 2 0 0 1 1.732 1M17 16v-1a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8 2v-3h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1" /><path fill="currentColor" d="M18 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></svg>;
const ForwardRef = forwardRef(SvgPrinter);
export default ForwardRef;