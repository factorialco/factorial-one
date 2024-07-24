declare const availableColors: {
    "chart-1": string;
    "chart-2": string;
    "chart-3": string;
    "chart-4": string;
    "chart-5": string;
};
export type ChartColor = keyof typeof availableColors;
export declare const autoColor: (index: number) => string;
export declare const chartColor: (color: ChartColor) => string;
export {};
