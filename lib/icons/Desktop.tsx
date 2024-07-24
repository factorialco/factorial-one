import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDesktop = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2v2h1a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h1v-2H6a4 4 0 0 1-4-4zm8 10v2h4v-2zm-4-2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2" /></svg>;
const ForwardRef = forwardRef(SvgDesktop);
export default ForwardRef;