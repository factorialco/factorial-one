import React from 'react';

interface ExampleComponentProps {
    /**
     * Optional custom text to display
     */
    text?: string;
    test?: string;
}
/**
 * A simple example component that displays "Hello World" or custom text
 */
declare const ExampleComponent: React.FC<ExampleComponentProps>;

export { ExampleComponent, type ExampleComponentProps };
