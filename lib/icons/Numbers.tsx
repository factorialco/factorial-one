import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgNumbers = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 12.5a1 1 0 0 1 1-1h2.5a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1M17.65 13.43q-.048.131-.107.248c-.148.295-.322.48-.527.6-.21.124-.524.222-1.016.222a1 1 0 1 0 0 2c.758 0 1.444-.152 2.03-.497.593-.349 1.012-.851 1.302-1.43.552-1.105.668-2.568.668-4.073a3 3 0 1 0-2.35 2.93M16 10.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8 8.5a1 1 0 0 0-2 0c0 .175-.097.433-.332.668S5.175 9.5 5 9.5a1 1 0 0 0 0 2c.352 0 .69-.073 1-.197V15.5a1 1 0 1 0 2 0z" /></svg>;
const ForwardRef = forwardRef(SvgNumbers);
export default ForwardRef;