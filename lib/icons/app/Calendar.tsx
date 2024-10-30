import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.65 3a.65.65 0 0 0-1.3 0v1.35H8A3.65 3.65 0 0 0 4.35 8v8A3.65 3.65 0 0 0 8 19.65h8A3.65 3.65 0 0 0 19.65 16V8A3.65 3.65 0 0 0 16 4.35h-.35V3a.65.65 0 1 0-1.3 0v1.35h-4.7zm8.7 6.35V8A2.35 2.35 0 0 0 16 5.65h-.35V7a.65.65 0 1 1-1.3 0V5.65h-4.7V7a.65.65 0 0 1-1.3 0V5.65H8A2.35 2.35 0 0 0 5.65 8v1.35zm-12.7 1.3h12.7V16A2.35 2.35 0 0 1 16 18.35H8A2.35 2.35 0 0 1 5.65 16z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCalendar);
export default ForwardRef;