import * as React from 'react';
import { SVGProps, forwardRef } from 'react';
import { withVectorEffect } from '../lib/vector-icon';
const SvgAi = (props: SVGProps<SVGSVGElement>, ref: React.Ref<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke" ref={ref} {...props}><path d="M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /><path d="M15 6.5C16.3807 6.5 17.5 5.38071 17.5 4C17.5 5.38071 18.6193 6.5 20 6.5C18.6193 6.5 17.5 7.61929 17.5 9C17.5 7.61929 16.3807 6.5 15 6.5Z" fill="currentColor" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" /></svg>;
const ForwardRef = forwardRef(SvgAi);
export default withVectorEffect(ForwardRef);