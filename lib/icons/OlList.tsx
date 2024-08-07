import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgOlList = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M12 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M12 17a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1M7 13a1 1 0 0 0-1 1 1 1 0 1 1-2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1h3a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3 1 1 0 1 0 0-2" /><path fill="currentColor" d="M8 4a1 1 0 0 0-2 0c0 .175-.097.433-.332.668S5.175 5 5 5a1 1 0 0 0 0 2c.352 0 .69-.073 1-.198V10a1 1 0 1 0 2 0z" /></svg>;
const ForwardRef = forwardRef(SvgOlList);
export default ForwardRef;