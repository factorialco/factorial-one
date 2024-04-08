import * as React from "react";
interface Props {
    date: Date;
    onSelect: (date: Date | undefined) => void;
}
export declare const DatePicker: React.FC<Props>;
export {};
