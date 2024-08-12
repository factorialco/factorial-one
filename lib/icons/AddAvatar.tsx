import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgAddAvatar = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><circle cx={12} cy={9} r={4} stroke="currentColor" strokeWidth={1.5} /><path d="M6.5 18C6.5 18 8.5 16 12 16C15.5 16 17.5 18 17.5 18" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgAddAvatar);
export default withVectorEffect(ForwardRef);