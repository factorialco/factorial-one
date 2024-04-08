import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('react').ForwardRefExoticComponent<import("./button").ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: {
                type: string;
            };
            options: readonly ["default", "secondary", "outline", "destructive", "positive", "ghost"];
        };
        size: {
            control: {
                type: string;
            };
            options: readonly ["default", "sm", "icon", "icon-sm"];
        };
    };
    args: {
        variant: "default";
        size: "default";
        onClick: import('@vitest/spy').Mock<[event: import("react").MouseEvent<HTMLButtonElement, MouseEvent>], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
