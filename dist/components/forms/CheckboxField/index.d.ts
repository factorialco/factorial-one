/// <reference types="react" />
interface Props {
    label: string;
    checked?: boolean;
    onChange?: (value: boolean) => void;
}
export declare const CheckboxField: React.FC<Props>;
export {};
