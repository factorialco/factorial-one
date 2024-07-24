import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgH3 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16 9a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 0 3 1 1 0 1 0 0 2 1.5 1.5 0 0 1 0 3H17a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3h.5a3.5 3.5 0 0 0 2.45-6 3.5 3.5 0 0 0-2.45-6H17a3 3 0 0 0-3 3 1 1 0 1 0 2 0M4 6a1 1 0 0 1 1 1v4h5V7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0v-4H5v4a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgH3);
export default ForwardRef;