import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.54 10.54a.65.65 0 1 0 .92.92l4.89-4.89V19a.65.65 0 1 0 1.3 0V6.57l4.89 4.89a.65.65 0 1 0 .92-.92l-6-6a.65.65 0 0 0-.92 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;