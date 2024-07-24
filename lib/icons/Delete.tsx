import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.5 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2h2a1 1 0 1 1 0 2H18v8a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9h-.5a1 1 0 0 1 0-2h2zM8 9v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9zm6.5-2V5h-5v2z" /></svg>;
const ForwardRef = forwardRef(SvgDelete);
export default ForwardRef;