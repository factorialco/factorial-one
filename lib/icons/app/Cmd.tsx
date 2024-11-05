import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCmd = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.625 6.838a2.838 2.838 0 1 1 2.837 2.837h-1.537v3.95h1.537a2.838 2.838 0 1 1-2.837 2.837v-1.537h-3.95v1.538a2.838 2.838 0 1 1-2.838-2.838h1.538v-3.95H6.837a2.837 2.837 0 1 1 2.838-2.837v1.537h3.95zM16.462 5.3c-.849 0-1.537.688-1.537 1.538v1.537h1.537a1.538 1.538 0 0 0 0-3.075M9.675 9.675v3.95h3.95v-3.95zm-1.3-1.3V6.838a1.537 1.537 0 1 0-1.538 1.537zm6.55 6.55v1.537a1.537 1.537 0 1 0 1.537-1.537zm-6.55 0H6.838a1.538 1.538 0 1 0 1.537 1.538z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgCmd);
export default ForwardRef;