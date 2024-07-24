import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDollarBill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M9 10.5A2.5 2.5 0 0 1 11.5 8H14a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 0 5H10a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 9 10.5" clipRule="evenodd" /><path fill="currentColor" d="M16 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" /></svg>;
const ForwardRef = forwardRef(SvgDollarBill);
export default ForwardRef;