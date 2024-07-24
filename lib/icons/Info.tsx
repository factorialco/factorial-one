import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 10a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1v-6h-1a1 1 0 0 1-1-1M13 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" /></svg>;
const ForwardRef = forwardRef(SvgInfo);
export default ForwardRef;