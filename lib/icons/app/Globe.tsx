import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgGlobe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8 5.657A8.95 8.95 0 0 0 13.945 13h-3.89A8.95 8.95 0 0 0 12 17.657m2.573-.235A6.01 6.01 0 0 0 17.917 13h-1.962a10.9 10.9 0 0 1-1.382 4.422M15.955 11h1.962a6.01 6.01 0 0 0-3.344-4.422A10.9 10.9 0 0 1 15.955 11m-2.01 0A8.95 8.95 0 0 0 12 6.343 8.95 8.95 0 0 0 10.055 11zm-5.9 2H6.083a6.01 6.01 0 0 0 3.344 4.422A10.9 10.9 0 0 1 8.045 13m0-2c.144-1.597.63-3.095 1.382-4.422A6.01 6.01 0 0 0 6.083 11z" /></svg>;
const ForwardRef = forwardRef(SvgGlobe);
export default ForwardRef;