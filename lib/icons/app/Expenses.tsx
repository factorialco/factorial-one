import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExpenses = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v9a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a4 4 0 0 0-3-3.874V6a3 3 0 0 0-3-3zm10 4H6a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1zM5 8.83c.313.11.65.17 1 .17h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /><path fill="currentColor" d="M18 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" /></svg>;
const ForwardRef = forwardRef(SvgExpenses);
export default ForwardRef;