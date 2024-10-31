import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSignature = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.106 5.553a1 1 0 0 1 1.341-.447L18 6l.447-.894h.002l.001.001.004.002.01.005.029.015.09.05a5.556 5.556 0 0 1 1.125.864C20.315 6.652 21 7.64 21 9v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9c0-.641-.316-1.152-.707-1.543a3.6 3.6 0 0 0-.741-.563l-.004-.002.002.001.002.001-.004-.002a1 1 0 0 1-.442-1.34" /><path fill="currentColor" d="M15.537 3.156a1 1 0 0 1 .307 1.38l-3.5 5.5a1 1 0 0 1-1.688-1.073l3.5-5.5a1 1 0 0 1 1.38-.307M7 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgSignature);
export default ForwardRef;