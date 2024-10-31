import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCheckMulti = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.1 7.2a1 1 0 0 1 .2 1.4l-7.5 10a1 1 0 0 1-1.6-1.2l7.5-10a1 1 0 0 1 1.4-.2M16.093 6.695a1 1 0 0 1 .212 1.398l-6.31 8.564a2 2 0 0 1-3.024.228l-3.178-3.178a1 1 0 1 1 1.414-1.414l3.178 3.178 6.31-8.564a1 1 0 0 1 1.398-.212" /></svg>;
const ForwardRef = forwardRef(SvgCheckMulti);
export default ForwardRef;