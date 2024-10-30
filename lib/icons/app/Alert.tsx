import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.65 7a.65.65 0 1 0-1.3 0v7a.65.65 0 1 0 1.3 0zm0 10a.65.65 0 1 0-1.3 0v.1a.65.65 0 1 0 1.3 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgAlert);
export default ForwardRef;