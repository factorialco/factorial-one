import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlertCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12.65 14.9C12.65 14.541 12.359 14.25 12 14.25C11.641 14.25 11.35 14.541 11.35 14.9L11.35 15C11.35 15.359 11.641 15.65 12 15.65C12.359 15.65 12.65 15.359 12.65 15L12.65 14.9ZM12.65 8.89999C12.65 8.54101 12.359 8.24999 12 8.24999C11.641 8.24999 11.35 8.54101 11.35 8.89999L11.35 11.9C11.35 12.259 11.641 12.55 12 12.55C12.359 12.55 12.65 12.259 12.65 11.9L12.65 8.89999Z" clipRule="evenodd" vectorEffect="non-scaling-stroke" /></svg>;
const ForwardRef = forwardRef(SvgAlertCircle);
export default ForwardRef;