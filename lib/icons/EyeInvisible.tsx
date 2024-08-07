import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgEyeInvisible = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3.938 6.694a1.08 1.08 0 0 1 1.44.501c1.14 2.353 3.576 4.391 6.622 4.391s5.483-2.038 6.622-4.391a1.078 1.078 0 1 1 1.94.94c-.406.84-.953 1.663-1.623 2.408l1.767 1.765a1 1 0 0 1-1.413 1.415l-1.831-1.828a9.4 9.4 0 0 1-2.3 1.27l.954 2.853a1 1 0 1 1-1.896.634l-1.001-2.991a9 9 0 0 1-2.375.008l-.998 2.983a1 1 0 1 1-1.896-.634l.947-2.83a9.4 9.4 0 0 1-2.359-1.293l-1.831 1.829a1 1 0 0 1-1.413-1.416l1.768-1.765a10.4 10.4 0 0 1-1.624-2.408 1.08 1.08 0 0 1 .5-1.44" /></svg>;
const ForwardRef = forwardRef(SvgEyeInvisible);
export default ForwardRef;