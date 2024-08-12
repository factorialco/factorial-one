import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgFaceId = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M10 10V11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M14 10V11" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M9.5 14V14C10.9616 15.1693 13.0384 15.1693 14.5 14V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" /><path d="M19 8V8C19 6.34315 17.6569 5 16 5V5M8 5V5C6.34315 5 5 6.34315 5 8V8M5 16V16C5 17.6569 6.34315 19 8 19V19M16 19V19C17.6569 19 19 17.6569 19 16V16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgFaceId);
export default withVectorEffect(ForwardRef);