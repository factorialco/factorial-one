import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEllipsis = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1.5 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgEllipsis);
export default ForwardRef;