export declare const componentTypes: readonly ["layout", "info", "action", "form"];
export type ComponentTypes = (typeof componentTypes)[number];
export interface ComponentMetadata {
    name: string;
    type: ComponentTypes;
    internal?: boolean;
}
export declare const Component: <R extends HTMLElement, P extends React.RefAttributes<R>>(meta: ComponentMetadata, Component: React.FC<P>) => import('react').ForwardRefExoticComponent<import('react').PropsWithoutRef<P> & import('react').RefAttributes<R>>;
