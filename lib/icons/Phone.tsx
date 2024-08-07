import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3.447 7.496C3.232 5.34 5.09 4 6.907 4h2.872a2 2 0 0 1 1.898 1.368l.974 2.921a2 2 0 0 1-1.155 2.49l-.572.228c.289.462.583.835.908 1.16.326.326.7.62 1.16.909l.23-.572a2 2 0 0 1 2.489-1.154l2.921.973A2 2 0 0 1 20 14.221v2.28c0 2.168-1.815 4.1-4.167 3.645-2.629-.507-6.52-1.778-9.114-5.021-2.324-2.906-3.078-5.682-3.272-7.63M6.907 6c-.996 0-1.534.653-1.47 1.297.161 1.615.79 4.012 2.844 6.578 2.154 2.693 5.478 3.834 7.93 4.308.902.174 1.789-.538 1.789-1.683v-2.28l-2.922-.973-.65 1.624a1 1 0 0 1-1.375.523c-1.06-.53-1.91-1.087-2.635-1.812s-1.282-1.575-1.812-2.635a1 1 0 0 1 .523-1.375l1.624-.65L9.78 6z" /></svg>;
const ForwardRef = forwardRef(SvgPhone);
export default ForwardRef;