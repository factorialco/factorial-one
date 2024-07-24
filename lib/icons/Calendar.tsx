import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4V3a1 1 0 0 1 1-1M8 6a2 2 0 0 0-2 2v1h12V8a2 2 0 0 0-2-2v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm10 5H6v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" /></svg>;
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;