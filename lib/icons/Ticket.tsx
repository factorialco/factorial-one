import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.328 20.397a2 2 0 0 1-2.68-.006l-1.167-1.058-1.18 1.011C7.005 21.456 5 20.534 5 18.826V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v11.826c0 1.709-2.004 2.63-3.302 1.518l-1.183-1.014zm-1.336-1.488 1.187-1.066a2 2 0 0 1 2.638-.031L17 18.826V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v11.826l1.18-1.012a2 2 0 0 1 2.645.037z" /><path fill="currentColor" d="M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M8 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgTicket);
export default ForwardRef;