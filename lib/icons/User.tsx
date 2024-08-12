import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M8 5H16C17.6569 5 19 6.34315 19 8V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8C5 6.34315 6.34315 5 8 5Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /><circle cx={12} cy={11.5} r={2.5} stroke="currentColor" strokeWidth={1.5} /><path d="M16 19C16 16.7909 14.2091 15 12 15C9.79086 15 8 16.7909 8 19" stroke="currentColor" strokeWidth={1.5} /></svg>;
const ForwardRef = forwardRef(SvgUser);
export default withVectorEffect(ForwardRef);