import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgHideSidebar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15.119 9.381a.875.875 0 0 1 0 1.238l-.506.506H17a.875.875 0 1 1 0 1.75h-2.387l.506.506a.875.875 0 1 1-1.237 1.238l-2-2a.875.875 0 0 1 0-1.238l2-2a.875.875 0 0 1 1.237 0" /><path fill="currentColor" d="M7 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm1 2v10H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zm2 10V7h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2z" /></svg>;
const ForwardRef = forwardRef(SvgHideSidebar);
export default ForwardRef;