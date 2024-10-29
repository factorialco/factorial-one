import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.293 7.707a1.83 1.83 0 0 0-2.586 0l-7 7a.414.414 0 0 0 .586.586l5-5a1 1 0 1 1 1.414 1.414l-5 5a2.414 2.414 0 0 1-3.414-3.414l7-7a3.828 3.828 0 1 1 5.414 5.414l-7 7a5.243 5.243 0 1 1-7.414-7.414l5-5a1 1 0 1 1 1.414 1.414l-5 5a3.243 3.243 0 1 0 4.586 4.586l7-7a1.83 1.83 0 0 0 0-2.586" /></svg>;
const ForwardRef = forwardRef(SvgPaperclip);
export default ForwardRef;