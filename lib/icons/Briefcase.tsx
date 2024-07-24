import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgBriefcase = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 2a3 3 0 0 0-3 3H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-1a3 3 0 0 0-3-3zm3 3h-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1M5 9a2 2 0 0 1 2-2v10a2 2 0 0 1-2-2zm4 8V7h6v10zm8 0V7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" /></svg>;
const ForwardRef = forwardRef(SvgBriefcase);
export default ForwardRef;