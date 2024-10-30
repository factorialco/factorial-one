import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDelete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.85 5c0-.911.739-1.65 1.65-1.65h5c.911 0 1.65.739 1.65 1.65v2.35h2.35a.65.65 0 1 1 0 1.3h-.85V17A3.65 3.65 0 0 1 14 20.65h-4A3.65 3.65 0 0 1 6.35 17V8.65H5.5a.65.65 0 0 1 0-1.3h2.35zm1.3 2.35h5.7V5a.35.35 0 0 0-.35-.35h-5a.35.35 0 0 0-.35.35zm-1.5 1.3V17A2.35 2.35 0 0 0 10 19.35h4A2.35 2.35 0 0 0 16.35 17V8.65h-8.7" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgDelete);
export default ForwardRef;