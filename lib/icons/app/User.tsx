import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 1.143 1.808 5.01 5.01 0 0 1 2.896-3.409 3.5 3.5 0 1 1 3.922 0 5.01 5.01 0 0 1 2.896 3.409A2 2 0 0 0 18 16V8a2 2 0 0 0-2-2zm6.83 12a3.001 3.001 0 0 0-5.66 0zM12 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></svg>;
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;