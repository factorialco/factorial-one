import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgAdd = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M12 5V12M12 19V12M12 12H5H19" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgAdd);
export default withVectorEffect(ForwardRef);