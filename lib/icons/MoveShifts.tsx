import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgMoveShifts = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3.5a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2z" /><path fill="currentColor" d="M6 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1M7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM17.293 12.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 17H14a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 0 1 0-1.414" /></svg>;
const ForwardRef = forwardRef(SvgMoveShifts);
export default ForwardRef;