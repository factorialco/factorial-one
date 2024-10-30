import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgChartLine = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 5a1 1 0 0 1 1 1v4.773l2.836-2.52a1 1 0 0 1 .939-.215l2.971.85 4.09-3.635a1 1 0 0 1 1.315-.012l3.5 3a1 1 0 0 1-1.302 1.518l-2.837-2.432-3.848 3.42a1 1 0 0 1-.939.214l-2.971-.848L5 13.449V15c0 .316.073.616.204.882l3.089-3.09a1 1 0 0 1 1.203-.16l2.882 1.646 3.464-3.03a1 1 0 0 1 1.24-.062l3.5 2.5a1 1 0 1 1-1.163 1.628l-2.856-2.04-3.404 2.979a1 1 0 0 1-1.155.115l-2.837-1.62-2.251 2.25L7 17h13a1 1 0 1 1 0 2H7a4 4 0 0 1-4-4V6a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;