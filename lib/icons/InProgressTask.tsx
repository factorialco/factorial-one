import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgInProgressTask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" ref={ref} {...props} xmlns="http://www.w3.org/2000/svg">
  <path d="M12.0005 6.00049C8.68678 6.00049 6.00049 8.68678 6.00049 12.0005C6.00049 15.3142 8.68678 18.0005 12.0005 18.0005C15.3142 18.0005 18.0005 15.3142 18.0005 12.0005C18.0005 8.68678 15.3142 6.00049 12.0005 6.00049ZM4.00049 12.0005C4.00049 7.58221 7.58221 4.00049 12.0005 4.00049C16.4188 4.00049 20.0005 7.58221 20.0005 12.0005C20.0005 16.4188 16.4188 20.0005 12.0005 20.0005C7.58221 20.0005 4.00049 16.4188 4.00049 12.0005Z" fill="#47A7FF" />
  <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5V16.5Z" fill="#47A7FF" />
</svg>;

const ForwardRef = forwardRef(SvgInProgressTask);
export default ForwardRef;