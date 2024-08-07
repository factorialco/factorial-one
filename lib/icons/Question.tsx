import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgQuestion = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.5 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.602 7.497C10.263 7.798 10 8.271 10 9a1 1 0 0 1-2 0c0-1.271.487-2.298 1.273-2.997C10.041 5.32 11.037 5 12 5c1.075 0 2.067.528 2.77 1.23C15.473 6.933 16 7.925 16 9c0 .934-.239 1.664-.642 2.257-.383.565-.881.948-1.258 1.23l-.075.057c-.373.28-.604.452-.775.667-.143.178-.25.396-.25.789a1 1 0 1 1-2 0c0-.857.268-1.514.688-2.039.341-.426.78-.753 1.107-.995l.105-.079c.373-.28.625-.49.804-.754.16-.235.296-.567.296-1.133 0-.425-.223-.933-.645-1.355C12.933 7.222 12.425 7 12 7c-.537 0-1.041.18-1.398.497" /></svg>;
const ForwardRef = forwardRef(SvgQuestion);
export default ForwardRef;