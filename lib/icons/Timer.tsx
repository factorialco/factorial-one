import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTimer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 9.33a1 1 0 0 1 1 1v2.078l2.486 1.381a1 1 0 0 1-.972 1.749L11 13.585V10.33a1 1 0 0 1 1-1" /><path fill="currentColor" d="M10 2a1 1 0 1 0 0 2h1v1.062A8.001 8.001 0 0 0 12 21a8 8 0 0 0 1-15.938V4h1a1 1 0 1 0 0-2zM6 13a6 6 0 1 1 12 0 6 6 0 0 1-12 0M18.383 5.293a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414" /><path fill="currentColor" d="M5.617 5.293a1 1 0 0 0-1.414 0L2.789 6.707a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414" /></svg>;
const ForwardRef = forwardRef(SvgTimer);
export default ForwardRef;