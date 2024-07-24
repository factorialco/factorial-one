import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgVideo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><path fill="currentColor" d="M9.507 8.13a1 1 0 0 1 1.008.013l5 3a1 1 0 0 1 0 1.714l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 .507-.87M11 10.766v2.468L13.056 12z" /></svg>;
const ForwardRef = forwardRef(SvgVideo);
export default ForwardRef;