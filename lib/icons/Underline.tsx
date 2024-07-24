import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUnderline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 5a1 1 0 0 1 1 1v5a3 3 0 1 0 6 0V6a1 1 0 1 1 2 0v5a5 5 0 0 1-10 0V6a1 1 0 0 1 1-1M6 18a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgUnderline);
export default ForwardRef;