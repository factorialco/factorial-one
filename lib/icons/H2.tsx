import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgH2 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M17.5 8A1.5 1.5 0 0 0 16 9.5a1 1 0 1 1-2 0 3.5 3.5 0 1 1 3.5 3.5 1.5 1.5 0 0 0-1.5 1.5V16h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1v-2.5a3.5 3.5 0 0 1 3.5-3.5 1.5 1.5 0 0 0 0-3" /></svg>;
const ForwardRef = forwardRef(SvgH2);
export default ForwardRef;