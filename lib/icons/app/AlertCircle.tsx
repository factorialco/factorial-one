import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlertCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8.65 2.9a.65.65 0 1 0-1.3 0v.1a.65.65 0 1 0 1.3 0zm0-6a.65.65 0 1 0-1.3 0v3a.65.65 0 1 0 1.3 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAlertCircle);
export default ForwardRef;