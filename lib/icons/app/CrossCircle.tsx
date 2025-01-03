import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgCrossCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
  <path fillRule="evenodd" clipRule="evenodd" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM9.45962 8.54038C9.20578 8.28654 8.79422 8.28654 8.54038 8.54038C8.28654 8.79422 8.28654 9.20578 8.54038 9.45962L11.0808 12L8.54038 14.5404C8.28654 14.7942 8.28654 15.2058 8.54038 15.4596C8.79422 15.7135 9.20578 15.7135 9.45962 15.4596L12 12.9192L14.5404 15.4596C14.7942 15.7135 15.2058 15.7135 15.4596 15.4596C15.7135 15.2058 15.7135 14.7942 15.4596 14.5404L12.9192 12L15.4596 9.45962C15.7135 9.20578 15.7135 8.79422 15.4596 8.54038C15.2058 8.28654 14.7942 8.28654 14.5404 8.54038L12 11.0808L9.45962 8.54038Z" fill="currentColor" />
</svg>;

const ForwardRef = forwardRef(SvgCrossCircle);
export default ForwardRef;