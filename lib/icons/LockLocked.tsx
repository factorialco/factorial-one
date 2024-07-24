import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgLockLocked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1" /><path fill="currentColor" d="M7 9.126V8a5 5 0 0 1 10 0v1.126c1.725.444 3 2.01 3 3.874v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3a4 4 0 0 1 3-3.874M9 8v1h6V8a3 3 0 1 0-6 0m7 3H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2" /></svg>;
const ForwardRef = forwardRef(SvgLockLocked);
export default ForwardRef;