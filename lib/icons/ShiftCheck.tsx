import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgShiftCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" /><path fill="currentColor" d="M16.707 14.793a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0-1.414-1.414L17 15.086z" /><path fill="currentColor" fillRule="evenodd" d="M12 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m5.5-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" /><path fill="currentColor" d="M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" /></svg>;
const ForwardRef = forwardRef(SvgShiftCheck);
export default ForwardRef;