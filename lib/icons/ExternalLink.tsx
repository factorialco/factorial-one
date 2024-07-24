import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExternalLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 8a4 4 0 0 1 4-4h2a1 1 0 1 1 0 2H8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.5a1 1 0 1 1 2 0V16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" /><path fill="currentColor" d="M14.5 4a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0V6.414l-5.793 5.793a1 1 0 0 1-1.414-1.414L17.586 5H15.5a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgExternalLink);
export default ForwardRef;