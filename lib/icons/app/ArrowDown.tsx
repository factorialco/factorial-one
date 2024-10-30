import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.46 13.46a.65.65 0 1 0-.92-.92l-4.89 4.89V5a.65.65 0 1 0-1.3 0v12.43l-4.89-4.89a.65.65 0 1 0-.92.92l6 6a.65.65 0 0 0 .92 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;