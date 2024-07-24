import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDeny = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-2 0c0-1.296-.41-2.496-1.11-3.476L8.525 16.89A6 6 0 0 0 18 12M7.11 15.477l8.367-8.368a6 6 0 0 0-8.367 8.367" /></svg>;
const ForwardRef = forwardRef(SvgDeny);
export default ForwardRef;