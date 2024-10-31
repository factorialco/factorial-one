import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCross = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M16.95 7.05 12 12l-4.95 4.95M12 12 7.05 7.05l9.9 9.9" /></svg>;
const ForwardRef = forwardRef(SvgCross);
export default ForwardRef;