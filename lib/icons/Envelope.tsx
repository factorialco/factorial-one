import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgEnvelope = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><rect x={4} y={6} width={16} height={12} rx={3} stroke="currentColor" strokeWidth={1.5} /><path d="M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /></svg>;
const ForwardRef = forwardRef(SvgEnvelope);
export default withVectorEffect(ForwardRef);