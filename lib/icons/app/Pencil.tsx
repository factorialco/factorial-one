import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.96 5.04a3.48 3.48 0 0 0-4.92 0l-7.5 7.5a.65.65 0 0 0-.167.289l-1.5 5.5a.65.65 0 0 0 .798.798l5.5-1.5a.65.65 0 0 0 .289-.167l7.5-7.5a3.48 3.48 0 0 0 0-4.92m-4 .92a2.178 2.178 0 0 1 3.08 3.08L11 16.08 7.92 13zm-7.628 8.292 2.416 2.416-3.322.906z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;