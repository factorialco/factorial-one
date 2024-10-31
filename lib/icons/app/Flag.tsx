import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0v-4.23c1.283-.312 2.183-.364 2.876-.278.791.1 1.393.39 2.07.84 1.903 1.27 4.367 1.183 6.654-.532a1 1 0 0 0 .4-.8V5.5a1 1 0 0 0-1.6-.8c-1.713 1.285-3.25 1.198-4.345.468-.825-.55-1.723-1.01-2.931-1.16-.891-.112-1.902-.05-3.124.21zm0 2.27c1.283-.312 2.183-.364 2.876-.278.791.1 1.393.39 2.07.84 1.464.977 3.261 1.151 5.054.397v7.248c-1.552.99-2.936.864-3.945.19-.825-.549-1.723-1.008-2.931-1.16-.891-.11-1.902-.048-3.124.211z" /></svg>;
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;