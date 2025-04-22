# Icon Migration from Core to React Native

This document outlines the steps required to transform the `core/assets/icons` for use in the React Native package, similar to how they're implemented in the React package.

## Progress Tracker

- [x] 1. Setup directory structure
- [x] 2. Create icons script configuration
- [x] 3. Create Icon component
- [x] 4. Add generate icon scripts
- [x] 5. Create icon type definitions
- [x] 6. Configure exports
- [x] 7. Update package entry point
- [x] 8. Add dependencies
- [x] 9. Configure NativeWind styling
- [x] 10. Create unit tests
- [ ] 11. Test in playground (requires manual testing)
- [ ] 12. Create Storybook story (requires manual testing)
- [x] 13. Update documentation

## Implementation Summary

The icon migration to React Native has been successfully implemented with the following components:

1. **Icon Component**: Created an Icon component that works with SVG icons and NativeWind styling.
2. **Icon Generation**: Set up scripts to generate React Native compatible icons from the core SVG assets.
3. **Type Definitions**: Defined proper TypeScript types for icons and components.
4. **NativeWind Integration**: Configured icons to work with NativeWind's styling system.
5. **Component Documentation**: Created documentation for the Icon component usage.

## Import Pattern

```tsx
// Import the Icon component
import { Icon } from "@factorialco/factorial-one-react-native";

// Import specific icons from app or modules directories
import { AppIcons, ModuleIcons } from "@factorialco/factorial-one-react-native";

// Use the Icon component with the icon as a prop
<Icon icon={AppIcons.Archive} size="md" />
<Icon icon={ModuleIcons.Home} size="lg" />
```

## Styling with NativeWind

The Icon component is designed to work with NativeWind, allowing you to style icons using Tailwind CSS classes:

```tsx
// Style using Tailwind CSS classes
<Icon icon={AppIcons.Archive} className="text-f1-icon-secondary" />
```

## Pending Tasks

The following tasks remain to be completed:

1. **Test in Playground**: Create an IconsScreen in the React Native playground to demonstrate and test icons.
2. **Create Storybook Story**: Create a Storybook story for the Icon component.

These tasks require manual testing in the development environment.

## Todo List

1. **Setup Directory Structure**

   - Create the base icon directories in the React Native package:
     ```
     packages/react-native/src/icons/app
     packages/react-native/src/icons/modules
     ```

2. **Create Icons Script Configuration**

   - Create a script configuration in the React Native package to handle SVG conversion
   - Add `@svgr/cli` to the project's dev dependencies if not already installed
   - Add a SVGR configuration specific for React Native output

3. **Create Icon Component**

   - Create an Icon component in the React Native package:
     ```
     packages/react-native/src/components/Icon/index.tsx
     ```
   - The component should accept `icon` and `size` props similar to the React implementation
   - Utilize React Native SVG library to render icons
   - Configure with NativeWind to support Tailwind CSS classes

4. **Generate Icon Scripts**

   - Add scripts to package.json in the React Native package for generating icons:
     ```json
     "generate-icons": "rm -fR src/icons/app/* src/icons/modules/* && run-p generate-app-icons generate-module-icons",
     "generate-app-icons": "npx @svgr/cli --out-dir src/icons/app --native --svg-props className={props.className} node_modules/@factorialco/factorial-one-core/assets/icons/app",
     "generate-module-icons": "npx @svgr/cli --out-dir src/icons/modules --native --svg-props className={props.className} node_modules/@factorialco/factorial-one-core/assets/icons/modules"
     ```

5. **Create Icon Type Definitions**

   - Define type interfaces for the Icon component
   - Ensure proper type exports for icon components

6. **Add Export Configuration**

   - Update the package.json exports field to include the icons
   - Create index.ts files in each icon directory to export all icons
   - Follow the same export pattern as React package to maintain consistency

7. **Export from Package Entry Point**

   - Update the main index.ts file to export the Icon component and all icons

8. **Add Dependencies**

   - Ensure the necessary dependencies are installed:
     - `react-native-svg` for rendering SVG in React Native
     - `@svgr/cli` as a dev dependency for icon generation
     - Ensure `nativewind` is properly configured for the project

9. **Create Styling Utilities**

   - Configure the Icon component to work with NativeWind and Tailwind CSS classes
   - Create utility functions for consistent icon styling, similar to the React implementation

10. **Create Unit Tests**

    - Create test file `packages/react-native/src/components/Icon/__tests__/Icon.spec.tsx`
    - Test rendering of the Icon component with different icons
    - Test size variants work as expected
    - Test className prop works correctly
    - Example test file structure:

      ```tsx
      import { render } from "@testing-library/react-native";
      import React from "react";
      import { Icon } from "../index";
      import { Archive } from "../../../icons/app";
      import { Home } from "../../../icons/modules";

      describe("Icon", () => {
        it("renders correctly with an app icon", () => {
          const { getByTestId } = render(<Icon icon={Archive} testID="icon" />);
          expect(getByTestId("icon")).toBeTruthy();
        });

        it("renders correctly with a module icon", () => {
          const { getByTestId } = render(<Icon icon={Home} testID="icon" />);
          expect(getByTestId("icon")).toBeTruthy();
        });

        it("applies the correct size class", () => {
          const { getByTestId } = render(
            <Icon icon={Archive} size="lg" testID="icon" />,
          );
          // Add expectations for size classes
          expect(getByTestId("icon")).toBeTruthy();
        });

        it("applies custom className correctly", () => {
          const { getByTestId } = render(
            <Icon icon={Archive} className="text-red-500" testID="icon" />,
          );
          // Add expectations for custom class
          expect(getByTestId("icon")).toBeTruthy();
        });
      });
      ```

11. **Test in Playground**

    - Create an IconsScreen in `packages/react-native-playground/screens/`
    - Add navigation to this screen
    - Display a grid of icons with different sizes, similar to the React implementation
    - Test icon rendering on both iOS and Android

12. **Create Storybook Story**

    - Add a story in `packages/react-native-playground/stories/` to showcase icons
    - Include example usages demonstrating different sizes and colors

13. **Documentation**
    - Update the project documentation to include information about the React Native icons
    - Add usage examples to the documentation

## Run Order

Execute the steps in the following order:

1. Steps 1-5: Setup the basic infrastructure
2. Steps 6-7: Configure exports
3. Steps 8-9: Handle dependencies and styling
4. Step 10: Create unit tests
5. Steps 11-12: Implement testing and examples in playground and Storybook
6. Step 13: Update documentation

## Expected Result

After completing these steps, developers should be able to:

- Import icons from the React Native package
- Use the Icon component with any of the available icons
- Configure icon size and color using Tailwind CSS classes, just like in the React package
- See examples of usage in the playground and Storybook
