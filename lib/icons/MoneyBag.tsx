import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.326 1.5a2 2 0 0 0-1.923 2.55l.41 1.438A6 6 0 0 0 5.28 9.945l-.715 4C3.91 17.623 6.736 21 10.472 21h3.056c3.736 0 6.563-3.377 5.907-7.055l-.715-4a6 6 0 0 0-3.534-4.457l.412-1.439A2 2 0 0 0 13.674 1.5zM12.814 7h-1.628a4 4 0 0 0-3.938 3.297l-.714 4A4 4 0 0 0 10.472 19h3.056a4 4 0 0 0 3.938-4.703l-.715-4A4 4 0 0 0 12.814 7m.432-2 .428-1.5h-3.348l.428 1.5z" clipRule="evenodd" /><path fill="currentColor" d="M11 9a1 1 0 0 1 2 0h1a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 .499 4.95L13 17a1 1 0 1 1-2 0h-1a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1-.499-4.95z" /></svg>;
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;