import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M12.4596 9.12629C12.7135 8.87245 12.7135 8.46089 12.4596 8.20705C12.2058 7.95321 11.7942 7.95321 11.5404 8.20705L8.65001 11.0974L8.65001 3.33333C8.65001 2.97435 8.35899 2.68333 8.00001 2.68333C7.64102 2.68333 7.35001 2.97435 7.35001 3.33333L7.35001 11.0974L4.45964 8.20705C4.2058 7.95321 3.79424 7.95321 3.5404 8.20705C3.28656 8.46089 3.28656 8.87245 3.5404 9.12629L7.5404 13.1263C7.79425 13.3801 8.2058 13.3801 8.45964 13.1263L12.4596 9.12629Z" fill="currentColor"/>
</svg>;
const ForwardRef = forwardRef(SvgArrowDown);
export default ForwardRef;