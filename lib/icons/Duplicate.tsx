import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgDuplicate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 6a4 4 0 0 1 4-4h2.757a4 4 0 0 1 2.829 1.172l2.242 2.242A4 4 0 0 1 18 8.243V14a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V8.243a2 2 0 0 0-.586-1.415l-2.242-2.242A2 2 0 0 0 11.757 4z" /><path fill="currentColor" d="M20 8a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678-1.041.085-2.335.085-3.978.085H9a1 1 0 1 1 0-2h1.4c1.697 0 2.909 0 3.86-.078.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01.077-.951.078-2.163.078-3.86V9a1 1 0 0 1 1-1" /></svg>;
const ForwardRef = forwardRef(SvgDuplicate);
export default ForwardRef;