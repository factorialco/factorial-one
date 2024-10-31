import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M10 10h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1 4M12 7v.1" /></svg>;
const ForwardRef = forwardRef(SvgInfo);
export default ForwardRef;