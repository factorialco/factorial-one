import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChevronDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.46 9.54a.65.65 0 0 0-.92.92l6 6a.65.65 0 0 0 .92 0l6-6a.65.65 0 1 0-.92-.92L12 15.08z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgChevronDown);
export default ForwardRef;