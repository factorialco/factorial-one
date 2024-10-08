import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgModulePerformance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 24" ref={ref} {...props}><g filter="url(#ModulePerformance_svg__a)"><path fill="#fff" d="M16.333 8.667a1.333 1.333 0 0 1 0-2.667h5.334C22.403 6 23 6.597 23 7.333v5.334a1.333 1.333 0 1 1-2.667 0v-2.115l-4.97 4.97-.021.022c-.112.112-.246.246-.374.355a2 2 0 0 1-.683.394 2 2 0 0 1-1.236 0c-.31-.101-.535-.268-.683-.394a7 7 0 0 1-.374-.355l-.022-.022-2.303-2.303-4.39 4.39a1.333 1.333 0 0 1-1.886-1.885l4.579-4.58.021-.021c.113-.112.247-.246.375-.355a2 2 0 0 1 .683-.394 2 2 0 0 1 1.236 0c.31.1.535.268.683.394.128.108.262.243.374.355l.022.022 2.303 2.303 4.78-4.781z" /></g><defs><filter id="ModulePerformance_svg__a" width={25.977} height={17.977} x={0.012} y={4.506} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy={1.494} /><feGaussianBlur stdDeviation={1.494} /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix values="0 0 0 0 0.0352941 0 0 0 0 0.0627451 0 0 0 0 0.109804 0 0 0 0.12 0" /><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_110" /><feBlend in="SourceGraphic" in2="effect1_dropShadow_6_110" result="shape" /></filter></defs></svg>;
const ForwardRef = forwardRef(SvgModulePerformance);
export default ForwardRef;