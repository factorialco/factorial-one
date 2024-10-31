import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPerson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={9} r={4} stroke="currentColor" strokeWidth={1.3} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M7 18s1.5-2 5-2 5 2 5 2" /></svg>;
const ForwardRef = forwardRef(SvgPerson);
export default ForwardRef;