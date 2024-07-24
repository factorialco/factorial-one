import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCollapse = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.5 10.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.793-3.793a1 1 0 1 1 1.414 1.414L15.914 9.5H17.5a1 1 0 0 1 1 1M5.5 13.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-1.586l-3.793 3.793a1 1 0 0 1-1.414-1.414L8.086 14.5H6.5a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgCollapse);
export default ForwardRef;