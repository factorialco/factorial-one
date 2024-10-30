import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.004 6.749A4 4 0 0 1 8.31 5h6.993a4 4 0 0 1 3.094 1.465l2.377 2.901A1 1 0 0 1 21 10v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a1 1 0 0 1 .173-.563zM8.31 7a2 2 0 0 0-1.653.874L5.891 9h1.088c1.367 0 2.533.988 2.757 2.336a.795.795 0 0 0 .784.664h2.96c.388 0 .72-.281.783-.664A2.795 2.795 0 0 1 17.02 9h.868L16.85 7.733A2 2 0 0 0 15.303 7zM19 11h-1.98a.795.795 0 0 0-.784.664A2.795 2.795 0 0 1 13.48 14h-2.958a2.795 2.795 0 0 1-2.758-2.336A.795.795 0 0 0 6.98 11H5v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" /></svg>;
const ForwardRef = forwardRef(SvgInbox);
export default ForwardRef;