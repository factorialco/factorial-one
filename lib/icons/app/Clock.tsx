import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12m0 2a8 8 0 1 0 0-16 8 8 0 0 0 0 16" /><path fill="currentColor" d="M12 8a1 1 0 0 1 1 1v2.42l2.996 1.712a1 1 0 1 1-.992 1.736l-3.5-2A1 1 0 0 1 11 12V9a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgClock);
export default ForwardRef;