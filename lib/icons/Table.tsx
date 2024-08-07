import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zM6 8h2.5v2H6zm4.5 0h3v2h-3zm5 0H18v2h-2.5zm0 4H18v2h-2.5zm-5 0h3v2h-3zM6 12h2.5v2H6zm9.5 4H18a2 2 0 0 1-2 2h-.5zm-2 0v2h-3v-2zm-5 0v2H8a2 2 0 0 1-2-2z" /></svg>;
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;