import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPauseFilled = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 6.5c0-.465 0-.697.038-.89A2 2 0 0 1 6.61 4.038C6.803 4 7.035 4 7.5 4s.697 0 .89.038A2 2 0 0 1 9.962 5.61c.038.193.038.425.038.89v11c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.571C8.197 20 7.965 20 7.5 20s-.697 0-.89-.039a2 2 0 0 1-1.572-1.571C5 18.197 5 17.965 5 17.5zM14 6.5c0-.465 0-.697.039-.89a2 2 0 0 1 1.57-1.571C15.804 4 16.036 4 16.5 4s.697 0 .89.039a2 2 0 0 1 1.572 1.57c.038.194.038.426.038.891v11c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038s-.697 0-.89-.038a2 2 0 0 1-1.571-1.572C14 18.197 14 17.965 14 17.5z" /></svg>;
const ForwardRef = forwardRef(SvgPauseFilled);
export default ForwardRef;