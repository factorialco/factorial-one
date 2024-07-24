import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgExpand = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7.414l-3.793 3.793a1 1 0 0 1-1.414-1.414L16.586 6H15a1 1 0 0 1-1-1M10 19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l3.793-3.793a1 1 0 0 1 1.414 1.414L7.414 18H9a1 1 0 0 1 1 1" /></svg>;
const ForwardRef = forwardRef(SvgExpand);
export default ForwardRef;