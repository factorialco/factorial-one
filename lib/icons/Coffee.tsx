import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8.707 1.293a1 1 0 0 1 0 1.414.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414 1 1 0 0 1 1.414 0M12.707 1.293a1 1 0 0 1 0 1.414.414.414 0 0 0 0 .586 1 1 0 0 1-1.414 1.414 2.414 2.414 0 0 1 0-3.414 1 1 0 0 1 1.414 0M7 6.5a2 2 0 0 0-2 2V17a4 4 0 0 0 4 4h4a4 4 0 0 0 3.876-3.008q.06.008.124.008h.5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H17V8.5a2 2 0 0 0-2-2zM17 12h.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H17zM7 8.5h8V17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" /></svg>;
const ForwardRef = forwardRef(SvgCoffee);
export default ForwardRef;