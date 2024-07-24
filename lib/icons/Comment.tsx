import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgComment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3 8.857A3.857 3.857 0 0 1 6.857 5H17a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4.667L9.71 20.968A2 2 0 0 1 6.613 20l-.35-1.047A3.87 3.87 0 0 1 3 15.129zM6.857 7A1.857 1.857 0 0 0 5 8.857v6.272A1.87 1.87 0 0 0 6.87 17c.508 0 .959.325 1.12.806l.52 1.561 2.623-1.967a2 2 0 0 1 1.2-.4H17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /></svg>;
const ForwardRef = forwardRef(SvgComment);
export default ForwardRef;