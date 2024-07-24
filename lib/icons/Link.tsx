import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.293 10.707a1.83 1.83 0 0 0-2.586 0l-3 3a2.536 2.536 0 0 0 3.586 3.586 1 1 0 0 1 1.414 1.414 4.535 4.535 0 1 1-6.414-6.414l3-3a3.83 3.83 0 0 1 5.414 0 1 1 0 0 1-1.414 1.414" /><path fill="currentColor" d="M11.707 13.293a1.83 1.83 0 0 0 2.586 0l3-3a2.536 2.536 0 1 0-3.586-3.586 1 1 0 1 1-1.414-1.414 4.536 4.536 0 0 1 6.414 6.414l-3 3a3.83 3.83 0 0 1-5.414 0 1 1 0 0 1 1.414-1.414" /></svg>;
const ForwardRef = forwardRef(SvgLink);
export default ForwardRef;