import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFileFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 7a4 4 0 0 1 4-4h3.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 19 9.243V17a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 12.757 5z" /><path fill="currentColor" d="M9 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M9 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgFileFilled);
export default ForwardRef;