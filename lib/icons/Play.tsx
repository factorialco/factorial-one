import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPlay = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 6.674c0-1.513 1.616-2.478 2.948-1.76l9.89 5.325c1.403.755 1.403 2.767 0 3.522l-9.89 5.326C7.616 19.804 6 18.839 6 17.326zM17.89 12 8 6.674v10.652z" /></svg>;
const ForwardRef = forwardRef(SvgPlay);
export default ForwardRef;