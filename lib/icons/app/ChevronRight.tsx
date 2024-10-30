import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChevronRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.46 5.54a.65.65 0 0 0-.92.92L14.08 12l-5.54 5.54a.65.65 0 1 0 .92.92l6-6a.65.65 0 0 0 0-.92z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgChevronRight);
export default ForwardRef;