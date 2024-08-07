import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPencil = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.793 4.793a3.828 3.828 0 1 1 5.414 5.414l-7.5 7.5a1 1 0 0 1-.444.258l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 .258-.444zm4 1.414a1.83 1.83 0 0 0-2.586 0L8.414 13 11 15.586l6.793-6.793a1.83 1.83 0 0 0 0-2.586M9.074 16.49l-1.563-1.563-.586 2.149z" /></svg>;
const ForwardRef = forwardRef(SvgPencil);
export default ForwardRef;