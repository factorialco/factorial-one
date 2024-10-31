import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShowSidebar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm1 2v10H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm2 10V7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" /><path fill="currentColor" d="M13.881 9.381a.875.875 0 0 0 0 1.238l.507.506H12a.875.875 0 0 0 0 1.75h2.388l-.507.506a.875.875 0 1 0 1.238 1.238l2-2a.875.875 0 0 0 0-1.238l-2-2a.875.875 0 0 0-1.238 0" /></svg>;
const ForwardRef = forwardRef(SvgShowSidebar);
export default ForwardRef;