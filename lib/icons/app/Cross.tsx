import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.41 7.51a.65.65 0 0 0-.92-.92L12 11.08 7.51 6.59a.65.65 0 0 0-.92.92L11.08 12l-4.49 4.49a.65.65 0 0 0 .92.92L12 12.92l4.49 4.49a.65.65 0 0 0 .92-.92L12.92 12z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;