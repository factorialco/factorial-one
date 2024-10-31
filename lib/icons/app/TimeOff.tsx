import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgTimeOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={1.3} d="m12 12 5.954 2.977c.024.012.054 0 .062-.027.461-1.446-.003-2.888-.943-3.908-.027-.029-.007-.077.033-.077h2.849c.025 0 .045-.02.045-.044-.03-1.448-1.508-3.385-4.905-3.42-.038 0-.06-.045-.037-.074l1.924-2.405a.04.04 0 0 0 .005-.047c-.53-.983-3.004-1.458-4.987.525M12 12l-5.954 2.977a.045.045 0 0 1-.062-.027c-.461-1.446.003-2.888.943-3.908.027-.029.007-.077-.033-.077H4.045A.044.044 0 0 1 4 10.921c.03-1.448 1.508-3.385 4.905-3.42.038 0 .06-.045.037-.074L7.018 5.022a.04.04 0 0 1-.005-.047c.53-.983 3.004-1.458 4.987.525M8 19h8m-2.5-6 .5 6m-3.5-6-.5 6" /></svg>;
const ForwardRef = forwardRef(SvgTimeOff);
export default ForwardRef;