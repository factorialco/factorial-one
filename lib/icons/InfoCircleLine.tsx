import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgInfoCircleLine = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M12 12V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><path d="M12 9V9.1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={1.5} /></svg>;
const ForwardRef = forwardRef(SvgInfoCircleLine);
export default withVectorEffect(ForwardRef);