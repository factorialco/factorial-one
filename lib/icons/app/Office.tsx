import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOffice = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 8a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1" /><path fill="currentColor" d="M5 7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v12a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2zm2 12h2v-2.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V19h2V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2zm6 0v-2.5h-2V19z" /></svg>;
const ForwardRef = forwardRef(SvgOffice);
export default ForwardRef;