import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAddBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" ref={ref} {...props}><path fill="currentColor" d="M5 10a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v3a1 1 0 1 1-2 0v-3a3 3 0 0 0-3-3H10a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h4a1 1 0 1 1 0 2h-4a4.98 4.98 0 0 1-3-1v1a3 3 0 0 0 3 3h4a1 1 0 1 1 0 2h-4a5 5 0 0 1-5-5zM25 22a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z" /><path fill="currentColor" fillRule="evenodd" d="M17 24a7 7 0 1 1 14 0 7 7 0 0 1-14 0m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAddBlock);
export default ForwardRef;