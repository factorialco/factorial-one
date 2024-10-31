import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgSave = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M16 19a3 3 0 0 0 3-3v-5.757a3 3 0 0 0-.879-2.122L15.88 5.88A3 3 0 0 0 13.757 5H8v0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3v0m8 0v-3a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3m8 0H8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M15 6v4H9V6" /></svg>;
const ForwardRef = forwardRef(SvgSave);
export default ForwardRef;