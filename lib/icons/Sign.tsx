import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSign = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.793 6.207a1.12 1.12 0 0 1 0 1.586l-8.764 8.764-1.85.265.264-1.85 8.764-8.765a1.12 1.12 0 0 1 1.586 0m1.414-1.414a3.12 3.12 0 0 0-4.414 0l-9 9a1 1 0 0 0-.283.566l-.5 3.5a1 1 0 0 0 1.131 1.13l3.5-.5a1 1 0 0 0 .566-.282l9-9a3.12 3.12 0 0 0 0-4.414M12 19a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1" /></svg>;
const ForwardRef = forwardRef(SvgSign);
export default ForwardRef;