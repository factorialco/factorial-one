import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.707 6.293a1 1 0 0 0-1.414 0L4 10.586a2 2 0 0 0 0 2.828l4.293 4.293a1 1 0 0 0 1.414-1.414L5.414 12l4.293-4.293a1 1 0 0 0 0-1.414M14.293 6.293a1 1 0 0 1 1.414 0L20 10.586a2 2 0 0 1 0 2.828l-4.293 4.293a1 1 0 0 1-1.414-1.414L18.586 12l-4.293-4.293a1 1 0 0 1 0-1.414" /></svg>;
const ForwardRef = forwardRef(SvgCode);
export default ForwardRef;