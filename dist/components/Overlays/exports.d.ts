export declare const Dialog: import('react').ForwardRefExoticComponent<Omit<{
    header?: {
        icon?: import('../Utilities/Icons').IconType;
        title: string;
        description: string;
    };
    actions?: {
        primary: {
            label: string;
            disabled?: boolean | undefined;
            onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
        };
        secondary?: {
            label: string;
            disabled?: boolean | undefined;
            onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
        };
    };
    loading?: boolean;
    children: import('react').ReactNode;
    open?: boolean;
    onClose?: () => void;
} & import('react').RefAttributes<HTMLDivElement>, "ref"> & import('react').RefAttributes<HTMLElement>>;
