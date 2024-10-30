import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEyeVisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 17.35c-3.568 0-6.313-2.623-7.311-5.35C5.687 9.273 8.432 6.65 12 6.65s6.313 2.623 7.311 5.35c-.998 2.727-3.743 5.35-7.311 5.35m0-12c-4.342 0-7.55 3.244-8.617 6.445a.65.65 0 0 0 0 .41C4.45 15.407 7.658 18.65 12 18.65s7.55-3.244 8.617-6.444a.65.65 0 0 0 0-.412C19.55 8.595 16.342 5.35 12 5.35M13.7 12a1.7 1.7 0 1 1-3.4 0 1.7 1.7 0 0 1 3.4 0m1.3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgEyeVisible);
export default ForwardRef;