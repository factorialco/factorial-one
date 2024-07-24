import { IconType } from '../../Utilities/Icons';
import { Button as ShadcnButton } from '../../../ui/button';
import { ComponentProps } from 'react';

export type ButtonProps = Pick<ComponentProps<typeof ShadcnButton>, "variant" | "size" | "disabled"> & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    icon?: IconType;
    hideLabel?: boolean;
};
declare const Button: React.FC<ButtonProps>;
export { Button };
