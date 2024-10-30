import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.65 7a.65.65 0 1 0-1.3 0v.1a.65.65 0 1 0 1.3 0zM10 9.35a.65.65 0 0 0 0 1.3h1a.35.35 0 0 1 .35.35v6a.35.35 0 0 1-.35.35h-1a.65.65 0 1 0 0 1.3h4a.65.65 0 1 0 0-1.3h-1.387q.037-.17.037-.35v-6A1.65 1.65 0 0 0 11 9.35z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SvgInfo);
export default ForwardRef;