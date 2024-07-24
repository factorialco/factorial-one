import { ButtonProps } from '../../Actions/Button';
import { IconType } from '../../Utilities/Icons';
import { ReactNode } from 'react';

type Action = Pick<ButtonProps, "label" | "onClick" | "disabled">;
type DialogProps = {
    header?: {
        icon?: IconType;
        title: string;
        description: string;
    };
    actions?: {
        primary: Action;
        secondary?: Action;
    };
    loading?: boolean;
    children: ReactNode;
    open?: boolean;
    onClose?: () => void;
};
declare const OneDialog: import('react').ForwardRefExoticComponent<DialogProps & import('react').RefAttributes<HTMLDivElement>>;
export { OneDialog as Dialog };
