import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSettings = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={1.3} d="M10.304 4.716a2 2 0 0 1 3.392 0l.74 1.185a2 2 0 0 0 1.628.94l1.396.048a2 2 0 0 1 1.696 2.938l-.656 1.234a2 2 0 0 0 0 1.878l.656 1.234a2 2 0 0 1-1.696 2.938l-1.396.048a2 2 0 0 0-1.628.94l-.74 1.185a2 2 0 0 1-3.392 0l-.74-1.185a2 2 0 0 0-1.627-.94l-1.397-.048a2 2 0 0 1-1.696-2.938l.656-1.234a2 2 0 0 0 0-1.878l-.656-1.234A2 2 0 0 1 6.54 6.89l1.397-.048a2 2 0 0 0 1.627-.94z" /><circle cx={11.999} cy={12} r={2.5} stroke="currentColor" strokeWidth={1.3} /></svg>;
const ForwardRef = forwardRef(SvgSettings);
export default ForwardRef;