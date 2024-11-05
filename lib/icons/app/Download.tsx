import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDownload = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 14a1 1 0 0 1 1 1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a1 1 0 0 1 1-1" /><path fill="currentColor" d="M11.293 14.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 11.586V5a1 1 0 1 0-2 0v6.586l-1.293-1.293a1 1 0 1 0-1.414 1.414z" /></svg>;
const ForwardRef = forwardRef(SvgDownload);
export default ForwardRef;